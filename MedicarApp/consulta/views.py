from rest_framework import serializers
from rest_framework import views
from rest_framework import viewsets
from .models import consulta
from .serializers import consultaSerializer

class consultaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = consulta.objects.all()
    serializer_class = consultaSerializer