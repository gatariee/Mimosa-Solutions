# Cookie Muncher

## Description

I Love Cookies,but I am lazy to keep clicking the button to get more cookies!

There must be an easier way to get to 500 Cookies! But there seems to be a password that has been Base64 encoded which does not allow me to get my cookies!

Can you help me to get my 500 cookies and decode the base64 encoded password?

## Solution

1. Viewing the page source and browse to: https://mimosadism.dmit.local/js/pages/challenges/cookie_muncher.js
```js
$.ajax({
    url: "/challenges/cookie-muncher",
    type: "post",
    data: JSON.stringify({
    password: "VVRJNWRtRXliR3hKUnpGMlltNU9NRnBZU1QwPQ==",
    score: cookies,
    }),
    ...
})
```
2. the `password` parameter seems to be base64 encoded, simply decode it 3 times (you can identify base64 encoded strings for their use of `=` as padding)
3. `password` = `Cookie monster`
4. Form a new AJAX POST request with an arbitrary value of the score (500) and get the flag

```js
    $.ajax({
      url: "/challenges/cookie-muncher",
      type: "post",
      data: JSON.stringify({
        password: "Cookie monster",
        score: 500,
      }),
      contentType: "application/json",
      //CSRF protection
      beforeSend: function (e) {
        e.setRequestHeader(_csrf_header, _csrf_token);
      },
      success: function (e, t, n) {
        "function" == typeof window.default_challenge_success &&
          window.default_challenge_success(e);
      },
      error: function (e, t, n) {
        "function" == typeof window.default_challenge_error &&
          window.default_challenge_error(n);
      },
    });
```

5. Alternatively, for a prettier solve script.
```py
import requests
import sys

sys.path.append("../../") # danger danger, do not change!! (secrets will break)

from Secrets.csrf import CSRF_KEY, CSRF_VALUE
from Secrets.session import SESSION_KEY, SESSION_VALUE

# Disable SSL warnings (mimosa uses a self-signed certificate)
requests.packages.urllib3.disable_warnings()

# Constants
URL = "https://mimosadism.dmit.local/challenges/cookie-muncher"

headers = {
    CSRF_KEY: CSRF_VALUE,
}

cookies = {
    SESSION_KEY: SESSION_VALUE,
}

data = {
    'password': 'Cookie monster',
    'score': 500
}

try:
    response = requests.post(URL, headers=headers, cookies=cookies, json=data, verify=False)
    print(response.text)

except requests.RequestException as e:
    print(f"Request failed: {e}")



```