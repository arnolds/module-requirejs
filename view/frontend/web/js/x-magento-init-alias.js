define(['jquery'], function ($) {
    return function (config, element) {
        $(element).append(
            '<p>Added through x-magento-init using an alias.</p>'
        );
    };
});
