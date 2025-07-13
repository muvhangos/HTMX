from django.urls import path, include

urlpatterns = [
    path('', include('requests.urls')),
]