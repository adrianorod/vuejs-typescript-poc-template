## VUE TYPESCRIPT POC TEMPLATE

Initial model project using with VUEJS 3, TYPESCRIPT and SASS. Structured with example components, models, services and views ready to be used.

Plus: mixins sass, bootstrap integrated and utils JS with helper functions

## Requirements

* **[node.js](https://nodejs.org/en/)**
* **[sass](https://sass-lang.com/install)** - `$ npm install sass -g`

## Configuration

1. API access:
The project is prepared to use 2 links of API consults (a link for homol and a different link for production). Acess the vue.config.js and change the variable process.env.VUE_APP_APIURL with your API links for production and development.

2. Assets configs:
The recommended structure for assets (imgs, fonts, icons, etc.) is use a external link to use them. As this way, we not overload the project size and simplify the publish process. Acess the assets/scss_variables.scss archive and change the variables: $path-fonts, $path-images and $path-icons with your links.

## Instalation

    $ npm install

## Dev

    $ npm run serve

## Homol

    $ npm run build-homol

## Prod

    $ npm run build-prod
