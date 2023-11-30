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