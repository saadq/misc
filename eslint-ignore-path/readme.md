# How to reproduce issue

1. Run `npm install`
2. Run `npm test`

As you can see, you'll get an error message about a missing `.linterignore` file.

Creating a `.linterignore` file within the root `eslint-ignore-path` directory fixes this, but shouldn't the file  only be used if it exists and therefore optional?
