function Get500Cookies() {
    cookies = 500;
    document.getElementById("cookie-text").innerHTML = "Cookies: " + cookies;
    sendRequest();
}

function sendRequest() {
    var password = "Cookie monster";

    $.ajax({
        url: "/challenges/cookie-muncher",
        type: "post",
        data: JSON.stringify({
            password: password,
            score: cookies,
        }),
        contentType: "application/json",
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
}

// Directly get 500 cookies
Get500Cookies();
