from django.shortcuts import render
from .models import Image, Location, Category

# Create your views here.


def home(request):
    images = Image.get_all_images()
    return render(request, 'index.html', {'images': images})


def category(request, category):
    images = Image.get_images_by_category(category)
    return render(request, 'category.html', {'images': images})
