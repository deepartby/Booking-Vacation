from rest_framework import serializers
from .models import Vacation
from django.contrib.auth.models import User


class VacationSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Vacation
        fields = ('id', 'created', 'comments', 'start', 'end', 'confirm', 'owner')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    vacations = serializers.HyperlinkedRelatedField(many=True, view_name='vacation-detail', read_only=True)

    class Meta:
        model = User
        fields = ('url', 'id', 'username', 'vacations')