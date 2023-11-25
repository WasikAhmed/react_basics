from django.db import models

class Employee(models.Model):
    name = models.CharField("Name", max_length=240)
    email = models.EmailField()
    document = models.CharField("Document", max_length=20)
    phone = models.CharField(max_length=20)
    joinDate = models.DateField("Joining Date", auto_now_add=True)

    def __str__(self):
        return self.name
    
