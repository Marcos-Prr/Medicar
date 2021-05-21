from rest_framework import fields, serializers
from .models import medico , Especialidade


class EspecialidadeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Especialidade
        fields = (
            'id',
            'nome'
        )


class medicoSerializer(serializers.ModelSerializer):

    especialidade = EspecialidadeSerializer(read_only = True)
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
