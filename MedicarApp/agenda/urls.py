from .views import AgendaViewSet
from rest_framework.routers import SimpleRouter

routerAgenda = SimpleRouter()
routerAgenda.register('agendas',AgendaViewSet)

