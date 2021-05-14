from enum import unique
from django.db import models

# Create your models here.
class Especialidade(models.Model):
    nome = models.CharField(max_length=255,unique=True)

    def __str__(self):
        return self.nome


class medico(models.Model):
    nome = models.CharField(max_length = 255)
    crm = models.IntegerField(unique=True)
    email = models.EmailField(max_length=50,unique=True,blank=True, null=True)
    telefone = models.CharField(max_length=11, blank=True ,null=True)
    especialidade = models.ForeignKey(Especialidade,on_delete=models.CASCADE)

    def __str__(self):
        return f'Medico: {self.nome}  _ Especialidade: {self.especialidade} _ CRM: {self.crm}  '


