from django.db import models
from rest_framework.authtoken.models import Token


class User(models.Model):

    lastname = models.CharField(max_length=255)
    firstname = models.CharField(max_length=255)
    middlename = models.CharField(max_length=255)
    role = models.ForeignKey('Role', related_name='user', on_delete=models.CASCADE)
    login = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    IPCCLogin = models.CharField(max_length=100, unique=True)
    is_deleted = models.IntegerField()

    class Meta:
        db_table = 'user'


class Vacation(models.Model):

    user = models.ForeignKey('User', on_delete=models.CASCADE)
    date_from = models.DateField()
    date_to = models.DateField()
    comment = models.CharField(default='', max_length=255)
    year = models.DateTimeField()

    class Meta:
        db_table = 'vacation'

    def save(self, *args, **kwargs):
        super(Vacation, self).save(*args, **kwargs)


class Group(models.Model):

    name = models.CharField(default='', max_length=255)
    count_vacationist = models.IntegerField(default=1)

    class Meta:
        db_table = 'group'


class Role(models.Model):

    name = models.CharField(default='', max_length=255)
    code = models.CharField(default='', max_length=255)

    class Meta:
        db_table = 'role'


class UserGroup(models.Model):

    user_id = models.ForeignKey('User', related_name='user_group', on_delete=models.CASCADE)
    group_id = models.ForeignKey('Group', related_name='user_group', on_delete=models.CASCADE)

    class Meta:
        db_table = 'user_group'
