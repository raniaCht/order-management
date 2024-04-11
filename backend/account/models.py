from django.db import models
from django.contrib.auth.models import AbstractUser, UserManager

# Create your models here.

class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = None
    REQUIRED_FIELDS = []
    USERNAME_FIELD  = "email"

    objects = UserManager()