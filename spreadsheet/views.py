from django.shortcuts import render
from django.http import JsonResponse

# For now, we will handle the calculations directly in JavaScript
def index(request):
    return render(request, 'index1.html')

# def index1(request):
#     return render(request, 'index1.html')
