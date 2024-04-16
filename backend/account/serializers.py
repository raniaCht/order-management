from rest_framework.serializers import ModelSerializer
from django.contrib.auth.hashers import make_password
from .models import User

class UserRegistrationSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "id", "password"]


    def create(self, validated_data):
        validated_data["password"] = make_password(validated_data.get("password"))
        user = super(UserRegistrationSerializer, self).create(validated_data)
        return user

