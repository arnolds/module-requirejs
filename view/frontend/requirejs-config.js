var config = {
    config: {
        'Koz_RequireJS/js/api/config': {
            'apiKey': 'SGVsbG8sIFdvcmxkIQ=='
        }
    },
    map: {
        '*': {
            'imperative-alias': 'Koz_RequireJS/js/imperative-alias',
            'data-init-alias': 'Koz_RequireJS/js/data-init-alias',
            'data-init-alias-config': 'Koz_RequireJS/js/data-init-alias-config',
            'x-magento-init-alias': 'Koz_RequireJS/js/x-magento-init-alias',
            'x-magento-init-alias-config': 'Koz_RequireJS/js/x-magento-init-alias-config',
            'map-foo': 'Koz_RequireJS/js/api/map/foo'
        },
        'Koz_RequireJS/js/api/map': {
            'map-foo': 'Koz_RequireJS/js/api/map/bar'
        }
    },
    paths: {
        'path': 'Koz_RequireJS/js/api/path',
        'fallback': [
            'http://example.org/js/fallback',
            'Koz_RequireJS/js/api/path/fallback'
        ]
    },
    shim: {
        'Koz_RequireJS/js/api/shim/deps': [
            'Koz_RequireJS/js/api/shim/deps/foo',
            'Koz_RequireJS/js/api/shim/deps/bar'
        ],
        'Koz_RequireJS/js/api/shim/deps-alt': {
            deps: [
                'Koz_RequireJS/js/api/shim/deps-alt/foo',
                'Koz_RequireJS/js/api/shim/deps-alt/bar'
            ]
        },
        'Koz_RequireJS/js/api/shim/exports/foo': {
            exports: 'Foo'
        },
        'Koz_RequireJS/js/api/shim/exports/bar': {
            exports: 'Bar',
            init: function () {
                this.Bar.message = 'Shim init allows you to modify older scripts.';
                return this.Bar;
            }
        }
    },
    packages: [
        {
            name: 'Koz_RequireJS/js/api/package',
            main: 'index'
        }
    ]
};
