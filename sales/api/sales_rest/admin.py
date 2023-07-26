from django.contrib import admin
from .models import Sale
# Register your models here.


@admin.register(Sale)
class Sale(admin.ModelAdmin):
    list_display = ["id", "automobile", "salesperson", "customer", "price"]
