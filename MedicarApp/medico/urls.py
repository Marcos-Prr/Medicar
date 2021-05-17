from django.urls import path
from .views import EspecialidadeViewSet, medicoViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register('medicos',medicoViewSet)
router.register('especialidades',EspecialidadeViewSet)

