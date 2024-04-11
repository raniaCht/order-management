from django.db import models
from .choices import OrderStatus
from account.models import User

class Order(models.Model):
    title = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    created_at = models.DateTimeField(auto_now_add=True) 
    status = models.CharField(max_length=255, choices=OrderStatus.choices)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="my_orders")