from django.shortcuts import render
from .models import Image, Location, Category
from django.http import Http404
# Create your views here.


def home(request):
    images = Image.get_all_images()
    return render(request, 'index.html', {'images': images})


def image(request, image_id):
    try:
        image = Image.objects.get(id=image_id)
    except:
        raise Http404()
    return render(request, 'image.html', {'image': image})


def category(request, category):
    images = Image.get_images_by_category(category)
    return render(request, 'category.html', {'images': images})


def location(request, location):
    images = Image.filter_by_location(location)
    return render(request, 'location.html', {'images': images})


def search_images(request):
    if 'image' in request.GET and request.GET['image']:
        search_term = request.GET.get('image')
        images = Image.search_by_category(search_term)
        message = f"{search_term}"

        return render(request, 'search.html', {'message': message, 'images': images})
    else:
        message = "You haven't searched for any term"
        return render(request, 'search.html', {'message': message})
