* https://create-react-app.dev/docs/getting-started
* https://react-typescript-cheatsheet.netlify.app/docs/basic/setup

# install

* `npx create-react-app my-app --template typescript` - install the app
* `npm start` - open localhost:3000
* `Ctlr+P` + `ext install msjsdiag.debugger-for-chrome`

# use

* `./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"` to prettier syntax
* restart vs code
* `npm run build` - build the assets
* `npm run analyze` - analyze the bundle size

# storybook

* `npx -p @storybook/cli sb init` // i had problem with installing, because it installed dev version witch wasn't published yet
* add `"storybook": "start-storybook -p 9001"` into package.json, `scripts` section
* `npm run storybook`