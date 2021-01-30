define(['jquery'], function ($) {
    return function (config, element) {
        $(element).append(
            '<p>Added through x-magento-init targeting a specific element.</p>'
        );
    };
});
