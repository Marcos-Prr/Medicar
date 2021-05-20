from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name','last_name','username','email','password']
        extra_kwargs={
            'password':{'write_only':'password'}
        }

        def save(self):
            new_user = User(username=self.validated_data['username'],
                    email=self.validated_data['email'],
                    first_name=self.validated_data['first_name'],
                    last_name=self.validated_data['last_name'],
                    password=self.validated_data['password']
                )
            new_user.set_password(self.validated_data['password'])
            new_user.save()
            return new_user
