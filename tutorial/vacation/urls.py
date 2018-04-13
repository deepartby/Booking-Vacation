from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import VacationViewSet, UserViewSet


router = DefaultRouter()
router.register(r'vacations', VacationViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]