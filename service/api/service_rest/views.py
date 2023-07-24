from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from .encoders import (
    TechnicianEncoder,
    AppointmentEncoder,
)

from .models import Technician, AutomobileVO, Appointment
