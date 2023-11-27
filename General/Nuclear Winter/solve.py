import requests
import sys

sys.path.append("../../") # danger danger, do not change!! (secrets will break)

from Secrets.csrf import CSRF_KEY, CSRF_VALUE
from Secrets.session import SESSION_KEY, SESSION_VALUE

# Disable SSL warnings (mimosa uses a self-signed certificate)
requests.packages.urllib3.disable_warnings()

# Constants
URL = "https://mimosadism.dmit.local/challenges/nuclear-winter"

headers = {
    CSRF_KEY: CSRF_VALUE,
}

cookies = {
    SESSION_KEY: SESSION_VALUE,
}

data = {
    "code": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
}

try:
    print(f"[*] Sending request to {URL} with headers: {headers} and cookies: {cookies} and data: {data} ")
    response = requests.post(URL, headers=headers, cookies=cookies, data=data, verify=False)
    print(response.text)

    print(f"\n[*] Resending request with new code value...\n")
    data = {
        "code": "m1m0s4"
    }
    response = requests.post(URL, headers=headers, cookies=cookies, data=data, verify=False)
    print(response.text)
except requests.RequestException as e:
    print(f"Request failed: {e}")