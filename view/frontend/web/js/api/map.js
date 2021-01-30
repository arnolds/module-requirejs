define([
    'jquery',
    'map-foo'
], function ($, value) {
    return function (config, element) {
        $(element).append(`<p>${value}</p>`);
    }
});
