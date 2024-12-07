from django.db import models

# Create your models here.

class ticketsalli(models.Model):
    TIPO_CHOICES = [
        ('GENERAL', 'General'),
        ('VIP', 'VIP'),
        ('ALL ACCESS', 'All Access'),
    ]
    tipo = models.CharField(max_length=20, choices=TIPO_CHOICES, default='GENERAL')
    codigoTicket = models.CharField(max_length=10)
    nombreTicket = models.CharField(max_length=20)
    descripcionTicket = models.CharField(max_length=255)
    precioTicket = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad = models.IntegerField()
    estatus = models.BooleanField()
    def __str__(self):
        return f"{self.nombreTicket} - {self.descripcionTicket} - ${self.precioTicket}"