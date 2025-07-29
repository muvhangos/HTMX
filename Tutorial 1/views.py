from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Student
from .forms import StudentForm

def index(request):
    students = Student.objects.all()
    return render(request, 'admissions/index.html', {'students': students})

def create_student(request):
    if request.method == 'POST':
        form = StudentForm(request.POST)
        if form.is_valid():
            student = form.save()
            return render(request, 'admissions/partials/student_row.html', {'student': student})
    else:
        form = StudentForm()
    return render(request, 'admissions/partials/student_form.html', {'form': form})

def update_student(request, pk):
    student = get_object_or_404(Student, pk=pk)
    if request.method == 'POST':
        form = StudentForm(request.POST, instance=student)
        if form.is_valid():
            student = form.save()
            return render(request, 'admissions/partials/student_row.html', {'student': student})
    else:
        form = StudentForm(instance=student)
    return render(request, 'admissions/partials/student_form.html', {'form': form, 'student': student})

def delete_student(request, pk):
    student = get_object_or_404(Student, pk=pk)
    student.delete()
    return HttpResponse('')
