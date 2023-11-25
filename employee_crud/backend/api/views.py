from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework import generics

from .models import Employee
from .serializers import *

class employee_list(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

class employee_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer

# @api_view(['GET', 'POST'])
# def employee_list(request):
#     if request.method == 'GET':
#         data = Employee.objects.all()

#         serializer = EmployeeSerializer(data, context={'request': request}, many=True)

#         return Response(serializer.data)

#     elif request.method == 'POST':
#         serializer = EmployeeSerializer(data=request.data)

#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_201_CREATED)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['PUT', 'DELETE'])
# def employee_detail(request):
#     try:
#         employee = Employee.objects.get(pk=pk)
#     except Employee.DoesNotExist:
#         return Response(status=status.HTTP_404_NOT_FOUND)

#     if request.method == 'PUT':
#         serializer = EmployeeSerializer(employee, data=request.data, context={'request': request})
#         if serializer.is_valid():
#             serializer.save()
#             return Response(status=status.HTTP_204_NO_CONTENT)

#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     elif request.method == 'DELETE':
#         employee.delete()
#         return Response(status=status.HTTP_204_NO_CONTENT)
            