from django.contrib import admin

# Register your models here.
from .models import consulta

@admin.register(consulta)
class consultaAdmin(admin.ModelAdmin):
    list_display =  ("agenda","horario","medico","usuario")