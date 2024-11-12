from rest_framework.views import APIView
from .serializers import UserRegistrationSerializer
from django.contrib.auth import authenticate, login
from .models import User
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


class UserRegistrationView(APIView):
    serializer_class = UserRegistrationSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        print(serializer.errors)
        user = serializer.save()
        
        refresh = RefreshToken.for_user(user) 
        response_data = {
            'refresh': str(refresh),
            'access': str(refresh.access_token), 
            "message": "User registered and logged in successfully."
        }

        return Response(response_data, status=status.HTTP_201_CREATED)
