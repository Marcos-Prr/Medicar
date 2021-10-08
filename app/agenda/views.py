from django.db.models import query
from django.db.models import Prefetch, OuterRef,Exists
from rest_framework import serializers
from rest_framework import viewsets
from rest_framework import views
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from .models import Agenda ,Horario
from .serializers import agendaSerializer,horarioSerializer

class AgendaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Agenda.objects.all()
    serializer_class = agendaSerializer
    permission_classes = [IsAuthenticated]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['medico']

    horarios_livres = Horario.objects.disponivel().filter(agenda=OuterRef('pk'), marcado = False)
    queryset = Agenda.objects.disponivel().prefetch_related(Prefetch('horarios',queryset=Horario.objects.disponivel())).filter(Exists(horarios_livres))
    

class horarioViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Horario.objects.all()
    serializer_class = horarioSerializer