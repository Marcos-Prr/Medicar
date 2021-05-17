from .views import consultaViewSet
from rest_framework.routers import SimpleRouter 

routerConsulta = SimpleRouter()
routerConsulta.register('consultas',consultaViewSet)
