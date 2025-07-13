from django.core.management import execute_from_command_line
import os, sys

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'service_portal.settings')
execute_from_command_line(sys.argv)