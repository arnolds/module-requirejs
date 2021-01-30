define(['jquery'], function ($) {
    return function (config, element) {
        $('.requirejs-x-magento-init').append(
            '<p>Added through x-magento-init.</p>'
        );
    };
});
