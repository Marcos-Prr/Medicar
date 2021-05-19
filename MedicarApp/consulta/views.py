from rest_framework import serializers
from rest_framework import views
from rest_framework import viewsets
from rest_framework.response import Response
from .models import consulta
from .serializers import consultaSerializer

class consultaViewSet(viewsets.ViewSet):

    def list(self, request):    
        queryset = consulta.objects.all()
        serializer_class = consultaSerializer(queryset,many=True)

        return Response(serializer_class.data)

    def create(self,request):
        serializersPost = consultaSerializer(data=request.data)
        serializersPost.is_valid(raise_exception=True)
        serializersPost.save()
        return Response(serializersPost.data,status=status.HTTP_201_CREATED)