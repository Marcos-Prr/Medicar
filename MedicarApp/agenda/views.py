from django.db.models import query
from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import views
from .models import Agenda ,Horario
from .serializers import agendaSerializer,horarioSerializer

class AgendaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Agenda.objects.all()
    serializer_class = agendaSerializer

class horarioViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Horario.objects.all()
    serializer_class = horarioSerializer