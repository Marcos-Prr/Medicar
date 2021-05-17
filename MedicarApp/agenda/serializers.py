from rest_framework import fields, serializers
from .models import Agenda,Horario

class agendaSerializer(serializers.ModelSerializer):
    model = Agenda

    fields = (
        'id',
        'medico',
        'dia'
    )

class horarioSerializer(serializers.ModelSerializer):
    model = Horario
    fields = (
        'id',
        'agenda',
        'horar',
        'marcado'
    )