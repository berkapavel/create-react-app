# create starter pack template
https://create-react-app.dev/docs/getting-started

## install

* `npx create-react-app my-app --template typescript` - install the app
* `npm start` - open localhost:3000
* `Ctlr+P` + `ext install msjsdiag.debugger-for-chrome`

## use

* `./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"` to prettier syntax
* restart vs code
* `npm run build` - create a production build - https://create-react-app.dev/docs/production-build
* `npm run analyze` - analyze the bundle size
* `npm run start-ssl` - to start with self-sign certificate (alternatively can be start with specification of SSL_KEY `HTTPS=true SSL_CRT_FILE=cert.crt SSL_KEY_FILE=cert.key npm start`)
* `npm run flow` - check the files for type errors

## storybook

* `npx -p @storybook/cli sb init` // i had problem with installing, because it installed dev version witch wasn't published yet
* add `"storybook": "start-storybook -p 9001"` into package.json, `scripts` section
* `npm run storybook`

## can be used

* GraphQL client for React - https://relay.dev/
* React Router - https://reactrouter.com/web/guides/quick-start 
    * basic example https://reactrouter.com/web/example/basic
    * client-side routing https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing
* PWA use - https://create-react-app.dev/docs/making-a-progressive-web-app
* Measuring Performance - https://create-react-app.dev/docs/measuring-performance
* Writing tests - https://create-react-app.dev/docs/running-tests
* Development proxying API - https://create-react-app.dev/docs/proxying-api-requests-in-development
* Update top of HTML document (title, meta, etc.) - https://github.com/nfl/react-helmet
* Deployment - https://create-react-app.dev/docs/deployment#vercel
* Configuration - https://create-react-app.dev/docs/advanced-configuration

# go further
https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

# tutorial
* works with https://www.freecodecamp.org/news/how-to-build-a-todo-app-with-react-typescript-nodejs-and-mongodb/