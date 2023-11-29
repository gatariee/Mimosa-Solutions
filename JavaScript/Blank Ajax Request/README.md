# Cookie Muncher

## Description
A blank Ajax post requesst incase you forget the syntax
## Solution

1. fill in the challenge title(can be found in the name of the js script when inspecting the webpage) and the data you want to send
```js
$.ajax({
    url: "/challenges/",
    type: "post",
    data: JSON.stringify({

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
