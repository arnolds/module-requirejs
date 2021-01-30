define([
    'jquery',
    'module'
], function ($, module) {
    return function (config, element) {
        $(element).append(`<p>The API key is ${module.config().apiKey}</p>`);
    }
});
