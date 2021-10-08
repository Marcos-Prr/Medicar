from django.shortcuts import render
from rest_framework import serializers
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from .serializers import UserSerializer


# Create your views here.

class UserAPIView(APIView):

    def post(self,request):
        serializer = UserSerializer(data=request.data)
        data={}
        serializer.is_valid(raise_exception=True)
        new_user = serializer.save()
        
        data['username'] = new_user.username
        data['email'] = new_user.email
        
        return Response(data=data)


class AuthToken(ObtainAuthToken):
    def post(self,request,*args,**kwargs):

        serializer = self.serializer_class(data=request.data,context={'request':request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        return Response({
            'name': user.first_name + user.last_name,
            'token':token.key,
            })