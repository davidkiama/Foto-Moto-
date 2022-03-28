from django.urls import path
from .import views

from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.home, name='home'),
    path('category/<category>/', views.category, name='category'),
    path('location/<location>/', views.location, name='location'),
    path('search/', views.search_images, name='search_images'),
    path('image/<image_id>/', views.image, name='image'),

]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
else:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
