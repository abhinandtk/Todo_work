from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserloginSerializer,UserregisterSerializer,ProductSerializer
from .models import UserLogin,UserRegister,Product

# Create your views here.

class UserRegisterApi(GenericAPIView):
    serializer_class=UserregisterSerializer
    serializer_class_login=UserloginSerializer
    def post(self,request):
        Log_id=''
        Name=request.data.get('Name')
        Contact=request.data.get('Contact')
        Email=request.data.get('Email')
        Username=request.data.get('Username')
        Password=request.data.get('Password')
        role='User'
        if(UserLogin.objects.filter(Username=Username)):
            return Response({'message':'Duplicate usename found','success':False},status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer_login=self.serializer_class_login(data=({'Username':Username,'Password':Password,'role':role}))
            if serializer_login.is_valid():
                log=serializer_login.save()
                Log_id=log.id
            serializer=self.serializer_class(data={'Name':Name,'Contact':Contact,'Email':Email,'Log_id':Log_id})
            if serializer.is_valid():
                serializer.save()
                return Response({'data':serializer.data,'message':'User Registered Successfully','success':True},status=status.HTTP_201_CREATED)
            return Response({'data':serializer.errors,'message':'User register failed','success':False},status=status.HTTP_400_BAD_REQUEST)

class LoginUserApi(GenericAPIView):
    serializer_class=UserloginSerializer
    def post(self,request):
        Username=request.data.get('Username')
        Password=request.data.get('Password')
        logdata=(UserLogin.objects.filter(Username=Username,Password=Password))
        if(logdata.count()>0):
         read_serializer=UserloginSerializer(logdata,many=True)
         for i in read_serializer.data:
            id=i['id']
            role=i['role']
         regdata=(UserRegister.objects.all().filter(Log_id=id)).values()
         for i in regdata:
            Name=i['Name']
            Contact=i['Contact']
            Email=i['Email']
            User_id=i['id']
            return Response({'data':{'Name':Name,'Contact':Contact,'Email':Email,'User_id':User_id,'Log_id':id,'role':role},'message':'User Login successfully'})
        return Response({'data':'No data available','success':False},status=status.HTTP_400_BAD_REQUEST)

class Getsingleuser(GenericAPIView):
    def get(self,request,id):
        data=UserRegister.objects.filter(pk=id).values()
        return Response({'data':data,'message':'single product get successfully','success':True},status=status.HTTP_200_OK)

class ProductAdd(GenericAPIView):
    serializer_class=ProductSerializer
    def post(self,request):
        Name=request.data.get('Name')
        Price=request.data.get('Price')
        Quantity=request.data.get('Quantity')
        Category=request.data.get('Category')
        serializer=self.serializer_class(data={'Name':Name,'Price':Price,'Quantity':Quantity,'Category':Category})
        if serializer.is_valid():
            serializer.save()
            return Response({'data':serializer.data,'message':'Product Registered Successfully','success':True},status=status.HTTP_201_CREATED)
        return Response({'data':serializer.errors,'message':'Failed','success':False},status=status.HTTP_400_BAD_REQUEST)

class Viewproduct(GenericAPIView):
    serializer_class=ProductSerializer
    def get(self,request):
        datas=Product.objects.all()
        if(datas.count()>0):
            serializer=ProductSerializer(datas,many=True)
        return Response({'data':serializer.data,'message':'all product set','success':True},status=status.HTTP_200_OK)
    
class Updateuser(GenericAPIView):
    def put(self,request,id):
        datas=UserRegister.objects.get(pk=id)
        serializer=UserregisterSerializer(instance=datas,data=request.data,partial=True)
        if serializer.is_valid():
          serializer.save()
          return Response({'data':serializer.data,'message':'product updated successfully','success':True},status=status.HTTP_200_OK)
        else:
            return Response({'data':serializer.error,'message':'Update Failed','success':False},status=status.HTTP_400_BAD_REQUEST)

    


        
            
