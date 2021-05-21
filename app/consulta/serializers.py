from datetime import datetime
from django.db.models.base import Model
from rest_framework import fields,serializers
from .models import consulta
from usuario.models import User
from medico.serializers import medicoSerializer
from agenda.models import Agenda,Horario

class consultaSerializer(serializers.ModelSerializer):

    medico = medicoSerializer()
    dia = serializers.TimeField(source='agenda.dia')
    horario = serializers.TimeField(source='horario.hora')
    class Meta:
        model = consulta

        fields = (
            'id',
            'dia',
            'horario',
            'data_agendar',
            'medico',
        )

class consultaPostSerializer(serializers.Serializer):
    agenda_id = serializers.IntegerField()
    horario = serializers.TimeField()


    def validate(self,data):
        def validate_agenda(data):
            agenda = Agenda.objects.get(id=data['agenda_id'])

        def validate_horario(data):
             horario = Horario.objects.get(agenda__id=data['agenda_id'],hora=data['horario'])

        validate_agenda(data)
        validate_horario(data)
        return data

    def save(self):
        agenda_id = self.validated_data['agenda_id']
        horario_req = self.validated_data['horario']
        
        agenda = Agenda.objects.get(id=agenda_id)
        medico = agenda.medico
        
        horario = Horario.objects.get(agenda__id=agenda_id, hora=horario_req)
        usuario = User.objects.get(username=self.context['request'].user)
        Consulta= consulta(agenda=agenda, horario=horario, medico=medico, usuario=usuario)
        up = Horario.objects.filter(pk=horario.id).update(marcado=True)
        Consulta.save()
    
        return Consulta


class consultaDestroySerializer(serializers.Serializer):
    consulta_id = serializers.IntegerField()

    def validate(self, data):
        horario_atual = datetime.now().time()
        Consulta = consulta.objects.get(pk=data['consulta_id'],usuario__username=self.context['request'].user)

        return data 