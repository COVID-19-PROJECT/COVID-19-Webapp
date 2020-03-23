# covid-19-webapp

> Webapp for tracking and displaying results of COVID spread across population to help prevention, aid and spread mitigation.

## Getting Started

### Project structure

See [nuxt directory structure](https://nuxtjs.org/guide/directory-structure/) for a general understanding of the project structure.

### Prerequisites

* A local environment with node lts installed (v12.16, nvm recommended)
* npm ~6.0.0
* gulp ~4.0.0
* poeditor.com access (for managing translations)

### Installing

Install dependencies with npm

```bash
# Install dependencies
npm install

# Running local server at localhost:3000
npm run dev
```

## Running the tests

This project uses JEST for testing.

```bash
# Unit and integration testing
npm run test
``` 

###  And coding style tests

This project follows the [standard javascript style](https://standardjs.com/rules.html) as well the following rules:
  * Require trailing commas in multiline objects, arrays, exports and imports.
    [See examples](https://eslint.org/docs/rules/comma-dangle#always-multiline).

```bash
# Eslint
npm run lint

# Fix lint issues
npm run lint -- -fix
```

## Deployment

This project is currently being deployed using netlify. To deploy static files manually run the following commands:

```bash
# Install deps
npm install

# Build static app, everything is compiled into <project dir>/dist folder
npm run build --spa

# Example, use aws cli to copy to an s3 bucket
aws s3 sync --delete ./dist "s3://$AWS_BUCKET_NAME"
```

## Built With

* [Nuxt.js](https://nuxtjs.org/guide) - A vue SSR and static page generation framework
* [npm](https://docs.npmjs.com/getting-started/) - Node.js package manager
* [Bulma](https://maven.apache.org/) - Sass framework

## Contributing
Please read [CONTRIBUTING.md](CONTRIBUTING.MD) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning
We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/COVID-19-PROJECT/COVID-19-Webapp/tags). 

## Authors

@COVID-19-Developtment-Team-GT

### Webapp contributors

* [**Javier Toledo**](https://github.com/javiertoledos) - *Initial work* 

See also the list of [contributors](https://github.com/COVID-19-PROJECT/COVID-19-Webapp/graphs/contributors) who participated in this project.

## License
Pending.

