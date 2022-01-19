let settings = {
    "url": "https://chessnok.github.io/data.json",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    console.log(response);
});