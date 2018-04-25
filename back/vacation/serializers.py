from rest_framework import serializers
from .models import Vacation
from .models import User


class VacationSerializer(serializers.ModelSerializer):
    firstName = serializers.ReadOnlyField(source='user.firstname')
    lastName = serializers.ReadOnlyField(source='user.lastname')
    date_from = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d', 'iso-8601'])
    date_to = serializers.DateField(format='%Y-%m-%d', input_formats=['%Y-%m-%d', 'iso-8601'])

    class Meta:
        model = Vacation
        fields = ('id', 'date_from', 'date_to', 'comment', 'year', 'firstName', 'lastName')


class UserSerializer(serializers.ModelSerializer):

    role = serializers.ReadOnlyField(source='role.name')

    class Meta:
        model = User
        fields = ('id', 'lastname', 'firstname', 'middlename', 'IPCCLogin', 'role')
