from django.db import models
from medico.models import medico
from usuario.models import User
from agenda.models import Agenda,Horario
# Create your models here.

class consulta(models.Model):
    agenda = models.ForeignKey(Agenda, on_delete=models.CASCADE)
    horario = models.ForeignKey(Horario, on_delete=models.CASCADE)
    data_agendar = models.DateField(auto_now_add=True)
    medico = models.ForeignKey(medico, on_delete=models.CASCADE)
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)



