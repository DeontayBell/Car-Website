from django.urls import path

from .views import list_sales_person, show_sales_person, list_customers, show_customer, list_sales, show_sales

urlpatterns = [
    path("salespeople/", list_sales_person, name="list_sales_person"),
    path("salespeople/<int:id>/", show_sales_person, name="show_sales_person"),
    path("customers/", list_customers, name="list_customers"),
    path("customers/<int:id>/", show_customer, name="show_customer"),
    path("sales/", list_sales, name="list_sales"),
    path("sales/<int:id>/", show_sales, name="show_sales")
]
