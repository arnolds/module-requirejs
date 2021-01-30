window.Foo || (window.Foo = function () {
    return {
        message: 'Shim exports allows you to use older scripts easily.'
    };
}());
