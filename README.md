# React PDF Components

Wrapper components for react pdf

### Commit guidelines

- Please refer the [semantic commit guideline](https://www.conventionalcommits.org/en/v1.0.0/#summary) before committing your changes

### Format of the commit message

```
<type>(<scope>): <subject>

<body>

<footer>
```

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier to read on github as well as in various git tools.

#### Allowed `<type>`

- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)

#### Allowed `<scope>`

Scope could be anything specifying place of the commit change. For example $location, $browser, $compile, $rootScope, ngHref, ngClick, ngView, etc...

#### `<subject>` text

- use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end

#### `<body>` text

- describe your change in detail
- maximum characters per line 70

#### `<footer>` text

- mention the issue

### Husky configuration for local environment

- Run script `npm run prepare:husky` after installation of dependencies.

# How to install packages from GitHub NPM registry ?

## 1.Add `.npmrc` file to the project

- Add following config to it.

      @surge-global-engineering:registry=https://npm.pkg.github.com
      //npm.pkg.github.com/:\_authToken=<TOKEN>

- Then install packages : `yarn add @surge-global-engineering/rpdf-renderer`
