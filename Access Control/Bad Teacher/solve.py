import requests
import sys

sys.path.append("../../") # danger danger, do not change!! (secrets will break)
# Disable SSL warnings (mimosa uses a self-signed certificate)
requests.packages.urllib3.disable_warnings()

from Secrets.csrf import CSRF_KEY, CSRF_VALUE
from Secrets.session import SESSION_KEY, SESSION_VALUE

# Constants
URL = "https://mimosadism.dmit.local/challenges/bad-teacher"

headers = {
    CSRF_KEY: CSRF_VALUE,
}

cookies = {
    SESSION_KEY: SESSION_VALUE,
}

data = {
    "username": "p5678901",
}

try:

    print(f"[*] Sending request to {URL} with headers: {headers} and cookies: {cookies} and data: {data}")
    response = requests.post(URL, headers=headers, cookies=cookies, data=data, verify=False)
    print(response.text)
except requests.RequestException as e:
    print(f"Request failed: {e}")
