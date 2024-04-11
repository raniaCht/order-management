from rest_framework import generics
from .serializers import OrderSerializer
from .models import Order
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from rest_framework.permissions import IsAuthenticated
from .permissions import OrderDetailPermission

class OrderList(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ["title"]
    search_fields = ["title", "description"]

class OrderDetail(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "pk"
    serializer_class = OrderSerializer
    queryset = Order.objects.all()
    permission_classes = [IsAuthenticated, OrderDetailPermission]
