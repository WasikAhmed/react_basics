from rest_framework import serializers
from api.models import Employee

class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = ('pk', 'name', 'email', 'document', 'phone', 'joinDate')