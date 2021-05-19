from django.db.models import query
from django.db.models.query_utils import refs_expression
from rest_framework import serializers
from rest_framework import views
from rest_framework import filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import medico,Especialidade
from .serializers import medicoSerializer,EspecialidadeSerializer
from rest_framework import viewsets


class EspecialidadeViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Especialidade.objects.all()
    serializer_class = EspecialidadeSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['nome']
class medicoViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = medico.objects.all()
    serializer_class = medicoSerializer
    filter_backends = [filters.SearchFilter,DjangoFilterBackend]
    search_fields = ['nome']
    filterset_fields = ['especialidade']
