# vue-mailto

A Simple MailTo Protocol Handler Vue App

## Example App

```html
<!doctype html>
<html lang="">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>vue-mailto</titlr>
    <link rel="stylesheet" crossorigin
      href="https://jafrmartins.github.io/vue-mailto/dist/assets/index-B16qIcyN.css"
    />
    <script type="module" crossorigin  src="https://jafrmartins.github.io/vue-mailto/dist/assets/index-BPOu8uFY.js"></script>
   </head>
  <body>
    <section class="vue-mailto">
      <campaign value="Prefix For Subject"></campaign>
      <destination value="user@domain.tld"></destination>
      <subjects
          value='
          [{ "label": "Subject 1", "value": "1" },
          { "label": "Subject 2", "value": "2" }]
          '
      ></subjects>
    </section>
  </body>
</html>
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
