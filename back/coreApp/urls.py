from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework_jwt.views import refresh_jwt_token


urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include('vacation.urls')),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^', include('rest_auth.urls')),
    url(r'^registration/', include('rest_auth.registration.urls')),
    url(r'^refresh-token/', refresh_jwt_token),
]
