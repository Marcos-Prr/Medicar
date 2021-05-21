from django.db import models
from django.db.models import Q 
from datetime import date,datetime
from django.utils import timezone

class AgendaManager(models.Manager):
    def disponivel(self):
        disponivel = super().get_queryset().filter(dia__gte=date.today()).order_by('dia')
        return disponivel

class HorarioManager(models.Manager):
    def disponivel(self):
        formato_hora=datetime.strptime('00:00','%H:%M')
        hora = timezone.localtime(timezone.now())

        disponivel = super().get_queryset().filter(
            (
                Q(agenda__dia=date.today(),hora__gte=hora) | Q(agenda__dia__gt=date.today(),hora__gte=formato_hora)
            ),
            marcado=False
        )
        return disponivel