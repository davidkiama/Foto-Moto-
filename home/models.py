from statistics import mode
from django.db import models

# Create your models here.


class Image(models.Model):
    image = models.ImageField(
        upload_to='uploads/', default='default.jpg')
    title = models.CharField(max_length=60)
    description = models.TextField()
    location = models.ForeignKey('Location', on_delete=models.CASCADE)
    category = models.ForeignKey('Category', on_delete=models.CASCADE)

    @classmethod
    def get_all_images(cls):
        images = cls.objects.all()
        return images


class Location(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=60)

    def __str__(self):
        return self.name
