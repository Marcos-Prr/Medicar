from .views import AgendaViewSet
from rest_framework.routers import DefaultRouter, SimpleRouter

routerAgenda = DefaultRouter()
routerAgenda.register(r'agendas',AgendaViewSet)

