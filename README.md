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
    <title>vue-mailto</title>
  </head>
  <body>
    <section class="vue-mailto">
      <campaign value="Github.io" />
      <destination value="j.afr.martins@outlook.pt" />
      <subjects
        value='
          [{ "label": "Request Services", "value": "request-services" },
          { "label": "General Question", "value": "general-question" }]
        '
      />
    </section>
    <script type="module" src="/src/main.js"></script>
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
