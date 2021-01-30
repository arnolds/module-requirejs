define(['jquery'], function ($) {
    return function (config, element) {
        $(element).append(`<p>${config.message}</p>`);
    };
});
