from django.urls import path
from .views import employee_list, employee_detail

urlpatterns = [
    path("employee/", employee_list.as_view()),
    path("employee/<int:pk>", employee_detail.as_view()),
]
