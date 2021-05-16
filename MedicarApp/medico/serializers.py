from rest_framework import fields, serializers
from .models import medico , Especialidade

class medicoSerializer(serializers.ModelSerializer):
    
    class Meta:

        extra_kwargs ={
            'email': {'write_only': True}
        }
        model = medico

        fields = (
            'id',
            'nome',
            'crm',
            'email',
            'telefone',
            'especialidade'
        )


class EspecialidadeSerializer(serializers.ModelSerializer):
    
    class Meta:
        models = Especialidade
        fields = (
            'id',
            'nome'
        )
