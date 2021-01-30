# RequireJS Magento 2 Module

Magento 2 module demonstrating the usage of RequireJS.

## Contents

* [Setup](#Setup)
* [RequireJS](#RequireJS)
  * [Imperative](#Imperative)
  * [Declarative](#Declarative)
    * [data-mage-init](#data-mage-init)
    * [x-magento-init](#x-magento-init)
  * [API](#API)   

## Setup

Place module under `app/code/Koz/RequireJS`, or install through Composer.

```
$ composer config repositories.koz-requirejs vcs https://github.com/arnolds/module-requirejs
$ composer require koz/module-requirejs
```

Then enable the module:

```
$ bin/magento module:enable Koz_RequireJS
$ bin/magento setup:upgrade
```

Go to the homepage.

## RequireJS

Different way's of calling JS in Magento 2.

### Imperative

The most basic way of calling RequireJS in a `.phtml` template.

The files can be found here: 

* `view/frontend/templates/imperative.phtml`.
* `web/js/imperative.js`.
* `web/js/imperative-alias.js`.

## Declarative

The preferred way of calling RequireJS in a `.phtml` template.

#### data-mage-init

A way to call RequireJS in a `.phtml` template through an attribute.

The files can be found here:

* `view/frontend/templates/data-mage-init.phtml`.
* `web/js/data-init.js`.
* `web/js/data-init-alias.js`.
* `web/js/data-init-alias-config.js`.

#### x-magento-init

A way to call RequireJS in a `.phtml` through a `<script type="text/x-magento-init">...</script>` tag.

The files can be found here:

* `view/frontend/templates/x-magento-init.phtml`.
* `web/js/x-magento-init.js`.
* `web/js/x-magento-init-alias.js`.
* `web/js/x-magento-init-alias-config.js`.
* `web/js/x-magento-init-does-not-exist.js`.
* `web/js/x-magento-init-element.js`.

### API

Further configuration available using RequireJS API.

* config
* path
* map
* shim
* packages
* plugins

The files can be found here:

* `view/fronte/requirejs-config.js`.
* `view/frontend/templates/api.phtml`.
* `view/js/api/`.
