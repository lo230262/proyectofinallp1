from django.urls import path
from . import views

app_name = 'appFinallp1'

urlpatterns = [
    path('', views.Index, name='Index'),
    path('tickets/', views.TicketsAlligator, name='Tickets'),
    path('contacto/', views.Contacto, name='Contacto'),
    path('homepage/', views.HomePage, name='Homepage'),
    path('politicasdeprivacidad/', views.PoliticasPriv, name='Politicas'),


    
]
#path('', views.Bienvenida, name=''),