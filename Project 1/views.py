from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import ServiceRequest
from .forms import ServiceRequestForm

def index(request):
    form = ServiceRequestForm()
    requests = ServiceRequest.objects.all()
    return render(request, "requests/index.html", {"form": form, "requests": requests})

def create_request(request):
    form = ServiceRequestForm(request.POST)
    if form.is_valid():
        new_request = form.save()
        return render(request, "requests/partials/request_item.html", {"request": new_request})
    return HttpResponse(status=400)

def delete_request(request, pk):
    req = get_object_or_404(ServiceRequest, pk=pk)
    req.delete()
    return HttpResponse("")

def update_status(request, pk):
    req = get_object_or_404(ServiceRequest, pk=pk)
    req.status = request.POST.get("status")
    req.save()
    return HttpResponse("")

def submit_response(request, pk):
    req = get_object_or_404(ServiceRequest, pk=pk)
    req.response = request.POST.get("response")
    req.save()
    return render(request, "requests/partials/response.html", {"request": req})