from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.base_user import BaseUserManager

# Create your models here.

class UserManager(BaseUserManager):
    def create_user(self, email, full_name, password=None, is_admin=False, is_staff=False, is_active=True):
        if not email:
            raise ValueError("User must have an email")
        if not password:
            raise ValueError("User must have a password")

        user = self.model(
            email=self.normalize_email(email)
        )
        user.full_name = full_name
        user.set_password(password)  
        user.is_superuser = is_admin
        user.is_staff = is_staff
        user.is_active = is_active
        user.save()
        return user

    def create_superuser(self, email, password):
        if not email:
            raise ValueError("User must have an email")
        if not password:
            raise ValueError("User must have a password")
        user = self.create_user(
            email=email, full_name="admin", password=password
        )
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save()

        return user

class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = None
    REQUIRED_FIELDS = []
    USERNAME_FIELD  = "email"

    objects = UserManager()