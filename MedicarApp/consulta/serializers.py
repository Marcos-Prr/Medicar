from django.db.models.base import Model
from rest_framework import fields,serializers
from .models import consulta

class consultaSerializer(serializers.ModelSerializer):
    class Meta:
        model = consulta

        fields = (
            'id',
            'agenda',
            'horario',
            'data_agendar',
            'medico',
            'usuario'
        )