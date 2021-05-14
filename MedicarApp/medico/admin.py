from django.contrib import admin

from .models import medico
from .models import Especialidade

@admin.register(medico)
class medicoAdmin(admin.ModelAdmin):
    list_display =  ("nome","crm","especialidade")

admin.site.register(Especialidade)
