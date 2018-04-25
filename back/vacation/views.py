from .models import Vacation
from .serializers import VacationSerializer, UserSerializer
from .models import User
from rest_framework import permissions
from .permissions import IsOwnerOrReadOnly
from rest_framework import renderers
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):

    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        return self.queryset


class VacationViewSet(viewsets.ModelViewSet):

    queryset = Vacation.objects.all()
    serializer_class = VacationSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,
    #                       IsOwnerOrReadOnly,)

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
