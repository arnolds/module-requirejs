define(function () {
    return function (config, element) {
        element.textContent = config.message;
    };
});
