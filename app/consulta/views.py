
from rest_framework import serializers
from rest_framework import views
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import consulta
from agenda.models import Horario
from .serializers import consultaDestroySerializer, consultaSerializer ,consultaPostSerializer

class consultaViewSet(viewsets.ViewSet):
    permission_classes=[IsAuthenticated]
    def list(self, request):    
        queryset = consulta.objects.filter(usuario__username=request.user)
        serializer_class = consultaSerializer(queryset,many=True)

        return Response(serializer_class.data)

    def create(self,request):
        serializer = consultaPostSerializer(data=request.data,context={'request':request})
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def destroy(self,request,pk):
        data={}
        data['consulta_id']= pk
        serializer = consultaDestroySerializer(data=data,context={'request':request})
        serializer.is_valid(raise_exception=True)
        
        consulta_id = pk
        Consulta = consulta.objects.get(pk=consulta_id,usuario__username=request.user)
        desmarcado = Horario.objects.filter(pk=Consulta.horario.id).update(marcado=False)
        Consulta.delete()

        data={}
        return Response(data)
