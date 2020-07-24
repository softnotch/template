from django.db import models

# Create your models here.
from django.db import models

class ProjectTemplate(models.Model):
    title =models.CharField(max_length=100,blank=False)
    quote = models.CharField(max_length=250, blank=True)
    image = models.ImageField(upload_to='app/images/')
    url = models.URLField(blank=True)
    footerColor=models.CharField(max_length=10, blank=True)
    bgColor=models.CharField(max_length=10, blank=True)
    sectionColor=models.CharField(max_length=10, blank=True)
    sectionTextColor=models.CharField(max_length=10, blank=True)
    def __str__(self):
        return self.title
