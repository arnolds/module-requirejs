define(['jquery'], function ($) {
    return function (config, element) {
        $(element).append(
            '<p>Will never be called, because element does not exist.</p>'
        );
    };
});
