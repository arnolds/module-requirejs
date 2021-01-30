define([
    'jquery',
    'domReady',
    'underscore',
    'text!./plugin/tmpl-interpolate.html',
    'text!./plugin/tmpl-escape.html',
    'text!./plugin/tmpl-execute.html'
], function ($, domReady, _, tmplInter, tmplEsc, tmplExec) {
    return function (config, element) {
        var interHtml = _.template(tmplInter)({
            message: 'Added through a plugin, <strong>interpolating a value</strong>.'
        });

        var escHtml = _.template(tmplEsc)({
            message: 'Added through a plugin, <strong>escaping a value</strong>.'
        });

        var execHtml = _.template(tmplExec)({
            message: 'Added through a plugin, executing a value.'
        });

        $(element).append(interHtml);
        $(element).append(escHtml);
    }
});
