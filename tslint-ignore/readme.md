# How to Reproduce

1. Setup the project locally:

```bash
git clone git@github.com:saadq/misc.git
cd tslint-ignore
npm install
```

2. Run tslint with the CLI:

```bash
npm run cli
```

3. Run tslint with the API (same config):

```bash
npm run api
```

You can see that the cli respects the `exclude` rule while the api does not.
