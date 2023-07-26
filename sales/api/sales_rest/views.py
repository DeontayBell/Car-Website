from common.json import ModelEncoder
from django.shortcuts import render
from .models import Salesperson, Sale, Customer, AutomobileVO
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json


# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = ["id", "first_name", "last_name", "address", "phone_number"]


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = ["id", "first_name", "last_name", "employee_id"]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = ["id", "automobile", "salesperson", "customer", "price"]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "customer": CustomerEncoder(),
        "salesperson": SalespersonEncoder(),
    }


@require_http_methods(["GET", "POST"])
def list_sales_person(request):
    if request.method == "GET":
        sale_person = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": sale_person},
            SalespersonEncoder
        )
    else:
        content = json.loads(request.body)
        salesperson = Salesperson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalespersonEncoder,
            safe=False
        )


@require_http_methods(["DELETE"])
def show_sales_person(request, id):
    try:
        count, _ = Salesperson.objects.get(id=id).delete()
        return JsonResponse(
            {"deleted": count > 0}
        )
    except Salesperson.DoesNotExist:
        return JsonResponse(
            {"message": "Could not remove saleperson. Invalid Id"},
            status=404
        )


@require_http_methods(["GET", "POST"])
def list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"cunstomers": customers},
            encoder=CustomerEncoder
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False
        )


@require_http_methods(["DELETE"])
def show_customer(request, id):
    count, _ = Customer.objects.filter(id=id).delete()
    return JsonResponse(
        {"deleted": count > 0}
    )


@require_http_methods(["GET", "POST"])
def list_sales(request):
    if request.method == "GET":
        sales = Sale.objects.all()
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            vin = content['automobile']
            automobile = AutomobileVO.objects.get(vin=vin)
            content['automobile'] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "invalid vin"},
                status=400
            )
        try:
            customer_name = content["customer"]
            customer = Customer.objects.get(name=customer_name)
            content["customer"] = customer
        except Customer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status=400
            )
        try:
            salesperson_name = content["salesperson"]
            salesperson = Salesperson.objects.get(name=salesperson_name)
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            return JsonResponse(
                {"message": "Salesperson does not exist"}
            )

        sales = Sale.objects.create(**content)
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
            safe=False,
        )


@require_http_methods(["DELETE"])
def show_sales(request, id):
    count, _ = Sale.objects.filter(id=id).delete()
    return JsonResponse(
        {"deleted": count > 0}
    )
