---
title: Using ESLint
---

ESLint is an open source JavaScript linting utility. Code linting is a type of static analysis that is frequently used to find problematic patterns. There are code linters for most programming languages, and compilers sometimes incorporate linting into the compilation process.

JavaScript, being a dynamic and loosely-typed language, is especially prone to developer error. Without the benefit of a compilation process, JavaScript code is typically executed in order to find syntax or other errors. Linting tools like ESLint allow developers to discover problems with their JavaScript code without executing it.

## How to use ESLint

Gatsby ships with a built-in [ESLint](https://eslint.org) setup. For _most_ users, our built-in ESlint setup is all you need. If you know however that you'd like to customize your ESlint config e.g. your company has their own custom ESlint setup, this shows how this can be done.

You'll replicate (mostly) the [ESLint config Gatsby ships with](https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby/src/utils/eslint-config.js) so you can then add additional presets, plugins, and rules.

```shell

# First install the necessary ESLint dependencies
npm install --save-dev eslint-config-react-app
```

Now that your packages have been installed, create a new file at the root of the site named `.eslintrc.js` using the command below.

```shell
# Create a config file for ESLint
touch .eslintrc.js
```

### Configuring ESLint

Copy the snippet below to the newly created `.eslintrc.js` file. Then add additional presets, plugins, and rules as desired.

```js:title=.eslintrc.js
module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
}
```

### Disabling ESLint

Create an empty .eslintrc.js file at the root of your project to disable linting.

When there is no ESLint file Gatsby implicitly adds a barebones ESLint loader. The empty file will disable this behavior as Gatsby assumes once you have an ESLint file you are in charge of linting.

Note: If you provide a custom `.eslintrc.js` file, Gatsby gives you full control about the ESLint configuration. This means that it will disable the built-in `eslint-loader` and you need to enable it yourself. One way to do so is to use the Community plugin [`gatsby-eslint-plugin`](/packages/gatsby-plugin-eslint/).
