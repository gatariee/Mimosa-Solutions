$.get("/challenges/poison-apples", function (data) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(data, "text/html");
    var csrfToken = doc.querySelector("meta[name='_csrf']").content;

    $.ajax({
        url: "/challenges/poison-apples",
        type: "POST",
        data: JSON.stringify({ highscore: 500 }),
        contentType: "application/json",
        beforeSend: function (e) {
            e.setRequestHeader("X-CSRF-TOKEN", csrfToken);
        },
        success: function (response) {
            console.log('Highscore updated successfully', response);
        },
        error: function (response) {
            console.log('Error updating highscore', response);
        }
    });
});