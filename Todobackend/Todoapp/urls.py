
from django.urls import path
from .import views

urlpatterns = [
    path('UserRegisterApi',views.UserRegisterApi.as_view(),name='UserRegisterApi'),
    path('LoginUserApi',views.LoginUserApi.as_view(),name='UserRegisterApi'),
    path('ProductAdd',views.ProductAdd.as_view(),name='ProductAdd'),
    path('Viewproduct',views.Viewproduct.as_view(),name='Viewproduct'),
    path('Getsingleuser/<int:id>',views.Getsingleuser.as_view(),name='Getsingleuser'),
    path('Updateuser/<int:id>',views.Updateuser.as_view(),name='Updateuser'),
]
