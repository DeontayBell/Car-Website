from django.urls import path

from .views import (
    list_technicians,
    show_technician,
    list_appointments,
    show_appointment,
)


urlpatterns = [
    path(
        "technicians/",
        list_technicians,
        name="list_tehnicians",
    ),
    path(
        "technicians/<int:pk>/",
        show_technician,
        name="show_technician",
    ),
    path(
        "appointments/",
        list_appointments,
        name="list_appointments",
    ),
    path(
        "appointments/<int:pk>/",
        show_appointment,
        name="show_appointment",
    ),
]
