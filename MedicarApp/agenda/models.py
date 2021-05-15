from medico.models import medico
from django.db import models
from django.utils import timezone

class Agenda(models.Model):
    medico = models.ForeignKey(medico, on_delete=models.CASCADE)
    dia = models.DateField(auto_now=False, auto_now_add=False,default=timezone.now)

    def __str__(self):
        return f"Agenda {self.id} - {self.dia} / Medico: {self.medico}"


class Horario(models.Model):
    agenda = models.ForeignKey(Agenda,related_name='horarios', on_delete=models.CASCADE)
    hora = models.TimeField(auto_now = False, auto_now_add=False)
    marcado = models.BooleanField(default=False)


    def __str__(self):
        return f"(Agenda {self.agenda.id} Horario: {self.hora} - {self.agenda.dia} "

