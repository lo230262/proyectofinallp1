from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
from .models import ticketsalli

# Create your views here.

def Index(request):
    template = loader.get_template('indexdark.html')
    return HttpResponse(template.render())

def TicketsAlligator(request):
    general_tickets = ticketsalli.objects.filter(tipo='GENERAL').values()
    vip_tickets = ticketsalli.objects.filter(tipo='VIP').values()
    all_access_tickets = ticketsalli.objects.filter(tipo='ALL ACCESS').values()

    template = loader.get_template('ticketsdark.html')
    context = {
        'general_tickets': general_tickets,
        'vip_tickets': vip_tickets,
        'all_access_tickets': all_access_tickets,
        }
    return HttpResponse(template.render(context, request))

def Contacto(request):
    template = loader.get_template('Contacto.html')
    return HttpResponse(template.render())

def HomePage(request):
    template = loader.get_template('indexdark.html')
    return HttpResponse(template.render())

def PoliticasPriv(request):
    template = loader.get_template('PoliticasdePrivacidad.html')
    return HttpResponse(template.render())