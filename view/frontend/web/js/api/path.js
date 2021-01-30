define([
    'jquery'
], function ($) {
    return function (config, element) {
        $(element).append('<p>Added through paths RequireJS API configuration.</p>');
    };
});
