from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import UserSerializer


class RegisterView(generics.CreateAPIView):
    """View to handle user registration."""
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class ProtectedView(APIView):
    """View to handle protected resources"""
    permission_classes = [IsAuthenticated]
    def get(self, request):
        return Response({
            'status': 'You have access to this protected route'
        })