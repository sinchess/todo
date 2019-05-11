from django.urls import path

from .views import (
    UserCreateAPIView,
    UserAuthToken,
    UserListAPIView,
    TaskListAPIView,
    TaskCreateAPIView,
)

urlpatterns = [
    path('register/', UserCreateAPIView.as_view()),
    path('login/', UserAuthToken.as_view()),
    path('user-list/', UserListAPIView.as_view()),
    path('task-create/', TaskCreateAPIView.as_view()),
    path('task-list/', TaskListAPIView.as_view())
]
