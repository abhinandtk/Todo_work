from django.contrib import admin
from .models import UserLogin,UserRegister,Product

# Register your models here.
admin.site.register(UserLogin)
admin.site.register(UserRegister)
admin.site.register(Product)
