from django.core.exceptions import ValidationError
from medico.models import medico
from django.db import models
from django.utils import timezone
from datetime import date
from .manager import AgendaManager,HorarioManager

class Agenda(models.Model):
    medico = models.ForeignKey(medico, on_delete=models.CASCADE)
    dia = models.DateField(auto_now=False, auto_now_add=False,default=timezone.now)
    disponivel = models.BooleanField(default=True)
    objects = AgendaManager()

    def __str__(self):
        return f"Agenda {self.id} - {self.dia} / Medico: {self.medico}"

    def clean(self):
        def validate_data():
            if self.dia < date.today():
                raise ValidationError({'dia': 'Data precisa ser maior que a data atual'})

        
        def validate_agenda_medico():
            try:
                agenda = Agenda.objects.filter(medico=self.medico,dia=self.dia).get()
                raise ValidationError({'medico':'Médico já está com essa agenda marcada'})
            except Agenda.DoesNotExist:
                pass
    
        validate_data()
        if self.id == None:
            validate_agenda_medico()


class Horario(models.Model):
    
    agenda = models.ForeignKey(Agenda,related_name='horarios', on_delete=models.CASCADE)
    hora = models.TimeField(auto_now = False, auto_now_add=False)
    marcado = models.BooleanField(default=False)
    objects = HorarioManager()


    def clean(self):
        def validate_horario_value():
            try:
                horario = Horario.objects.filter(agenda = self.agenda,hora = self.hora).get()
                raise ValidationError({'hora':'Agenda já existe'})
            except Horario.DoesNotExist:
                pass
        validate_horario_value()

    def __str__(self):
        return f"(Agenda {self.agenda.id} Horario: {self.hora} - {self.agenda.dia} "

