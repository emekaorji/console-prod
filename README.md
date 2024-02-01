# console-prod

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Package Size][bundlephobia-img]][bundlephobia-url]

> Hide console logs in production

This library overrides the default console object, making it non-functional in a production environment.

## Install
```bash
npm install console-prod
```

## Usage
Import at the root of your project

For Example, in a NextJS app, that'll be `_app.js`.

```js
// _app.js

import 'console-prod';
```

In Dev mode, the `console` methods have their default behavior. In production, all methods are void functions and will do nothing.

##### DEV or STAGING
```js
import 'console-prod';

console.log('Wild fire on the ocean bed');
// => Wild fire on the ocean bed
```
##### PROD
```js
import 'console-prod';

console.log('Wild fire on the ocean bed');
// => 
```

To override this behaviour and force logs in prod, use the `console.prod` method. Which is a direct implementation of the default console object.

##### PROD
```js
import 'console-prod';

console.prod.log('Wild fire on the ocean bed');
// => Wild fire on the ocean bed
```

> Note: The above examples also goes for all other console methods e.g `warn`, `error`, `info`, `table`, etc.

## Server-side
In a server environment, console methods are not affected and function just as the default console methods.

## API

#### console: Console
#### console.prod: Console

[npm-img]: https://img.shields.io/npm/v/console-prod
[npm-url]: https://www.npmjs.com/package/console-prod
[build-img]: https://github.com/emekaorji/console-prod/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/emekaorji/console-prod/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/console-prod
[downloads-url]: https://www.npmtrends.com/console-prod
[issues-img]: https://img.shields.io/github/issues/emekaorji/console-prod
[issues-url]: https://github.com/emekaorji/console-prod/issues
[bundlephobia-img]: https://flat.badgen.net/bundlephobia/minzip/console-prod
[bundlephobia-url]: https://bundlephobia.com/package/console-prod