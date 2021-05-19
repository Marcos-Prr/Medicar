from rest_framework import fields, serializers
from .models import Agenda,Horario
from medico.serializers import medicoSerializer
from MedicarApp import settings


class horarioSerializer(serializers.ModelSerializer):

    class Meta:
        model = Horario
        fields = (
            'id',
            'agenda',
            'hora',
            'marcado'
        )
class agendaSerializer(serializers.ModelSerializer):
    
    medico = medicoSerializer()
    dia = serializers.DateField(format='%d/%m/%Y', input_formats=settings.DATE_INPUT_FORMATS)
    horarios = horarioSerializer(many=True,read_only = True )
    class Meta:
        model = Agenda

        fields = (
            'id',
            'medico',
            'dia',
            'horarios'
        )

