from enum import unique
from django.db import models

# Create your models here.
class Especialidade(models.Model):
    nome = models.CharField(max_length=255,unique=True)


class medico(models.Model):
    nome = models.CharField(max_length = 255)
    crm = models.IntegerField(unique=True)
    email = models.EmailField(max_length=50,unique=True,blank=True, null=True)
    telefone = models.CharField(max_length=11, blank=True ,null=True)
    especialidade = models.ForeignKey(Especialidade,on_delete=models.CASCADE)



