from django.db import models

class OrderStatus(models.TextChoices):
    PENDING = "Pending" 
    PROCESSING = "Processing" 
    SHIPPED = "Shipped"
    DELIVERED = "Delivered"