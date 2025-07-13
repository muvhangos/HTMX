from django.db import models

class ServiceRequest(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    description = models.TextField()
    status = models.CharField(max_length=20, default='Pending')
    response = models.TextField(blank=True)