from django.contrib import admin
from .models import medico ,Especialidade

@admin.register(medico)
class medicoAdmin(admin.ModelAdmin):
    list_display =  ("nome","crm","especialidade")

admin.site.register(Especialidade)
