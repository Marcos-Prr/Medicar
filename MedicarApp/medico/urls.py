from django.urls import path
from .views import EspecialidadeViewSet, medicoViewSet
from rest_framework.routers import SimpleRouter

routerMedicos = SimpleRouter()
routerMedicos.register('medicos',medicoViewSet)
routerMedicos.register('especialidades',EspecialidadeViewSet)

