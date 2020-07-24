from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import ProjectTemplate

def home(request):
    projects = ProjectTemplate.objects.all()
    return render(request, 'app/index.html', {'projects':projects})
