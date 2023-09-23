from rest_framework import serializers
from .models import UserLogin,UserRegister,Product

class UserloginSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserLogin
        fields='__all__'
    
class UserregisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserRegister
        fields='__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Product
        fields='__all__'