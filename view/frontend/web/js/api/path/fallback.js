define(['require'], function (require) {
    console.log(`Could not load http://example.org/js/fallback.js`);
    console.log(`Loaded file ${require.toUrl('Koz_RequireJS/js/api/path/fallback.js')} instead.`);
});
