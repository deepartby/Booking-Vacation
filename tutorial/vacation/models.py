from django.db import models
from django.contrib.auth.models import User


class Vacation(models.Model):

    owner = models.ForeignKey('auth.User', related_name='vacation', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    start = models.DateTimeField()
    end = models.DateTimeField()
    confirm = models.BooleanField(default=False)
    comments = models.CharField(default='', max_length=255)

    class Meta:
        ordering = ('created',)

    def save(self, *args, **kwargs):
        super(Vacation, self).save(*args, **kwargs)
