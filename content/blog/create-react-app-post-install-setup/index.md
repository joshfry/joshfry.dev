---
title: CRA - Post-Install Setup
date: '2020-02-20'
description: Things I like to do after a fresh install of create-react-app
---

> Things I like to do after a fresh install of create-react-app

## Configure [Prettier](https://prettier.io)

Create a `.prettierrc` config file at the project root with the following:

```json:title=.prettierrc
{
  "endOfLine": "lf",
  "printWidth": 100,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all"
}
```

## Install eslint plugins

```shell
$ yarn add eslint-plugin-import eslint-plugin-react --dev
```

## Configure [ESLint](https://eslint.org)

Create a `.eslintrc` config file at the project root with the following:

```json:title=.eslintrc
{
  "extends": [
    "react-app",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:react/recommended"
  ]
}
```

## Set up absolute import paths

Create a `jsconfig.json` config file at the project root with the following and update `.eslintrc`

```json:title=jsconfig.json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

```json:title=.eslintrc
{
  // ...
  "settings": {
    "import/resolver": {
      "node": {
        "paths": ["src"]
      }
    }
  }
}
```

## Set up [new-component](https://github.com/joshwcomeau/new-component) CLI to generate new components

Be sure to have a components directory at `./src/components/`. This is required by the tool and can be configured if your file structure is different.

Create a `.new-component-config.json` config file at the project root with the following. This will generate functional components by default as opposed to class-based components.

```json:title=.new-component-config.json
{
  "type": "functional"
}
```

<br />Generate a new component like this:

```shell
$ new-component Layout
```

## Install [sanitize.css](https://csstools.github.io/sanitize.css) to reset CSS

```shell
$ yarn add sanitize.css
```

## Install [React Helmet](https://github.com/nfl/react-helmet)

```shell
$ yarn add react-helmet
```

<br />
