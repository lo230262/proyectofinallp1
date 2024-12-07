from django.contrib import admin
from .models import ticketsalli


# Register your models here.
class ticketsAdmin(admin.ModelAdmin):
    list_display = ('codigoTicket', 'nombreTicket', 'descripcionTicket', 'precioTicket', 'cantidad', 'estatus')
admin.site.register(ticketsalli, ticketsAdmin)