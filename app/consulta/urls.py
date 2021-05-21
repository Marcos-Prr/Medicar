from .views import consultaViewSet
from rest_framework.routers import DefaultRouter, SimpleRouter 

routerConsulta = DefaultRouter()
routerConsulta.register('consultas',consultaViewSet , basename='consultas')
