from django.db import models

# Create your models here.

class UserLogin(models.Model):
    Username=models.CharField(max_length=30)
    Password=models.CharField(max_length=30)
    role=models.CharField(max_length=30)

class UserRegister(models.Model):
    Name=models.CharField(max_length=30)
    Contact=models.CharField(max_length=30)
    Email=models.CharField(max_length=30)
    Log_id=models.ForeignKey(UserLogin,on_delete=models.CASCADE)

class Product(models.Model):
    Name=models.CharField(max_length=30)
    Price=models.CharField(max_length=30)
    Quantity=models.CharField(max_length=30)
    Category=models.CharField(max_length=30)
