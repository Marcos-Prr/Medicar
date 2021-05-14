from django.urls import path
from django.urls.resolvers import URLPattern

from . import views

app_name = "medico"

urlpatterns = [
    path("",views.medicoListView.as_view(),name="list"),
    path("<slug:slug>/",views.medicoDetailView.as_view(),name="detail"),
]