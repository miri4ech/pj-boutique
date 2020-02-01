# Boutique Milan

Boutique Milan is a simple online boutique website powered by ReactJS.

You can visit the website by clicking [here](https://miri4ech.github.io/pj-boutique).

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ #clone pj-boutique.
$ cd pj-boutique
$ npm / yarn install
$ npm / yarn start 
```

### Production Environment

 - Install gh-pages ```npm install / yarn add gh-pages```
 - Setup ```homepage: https://[your user name].github.io/[repository name]/``` in package.json
 - Setup ```"predeploy": "npm run build", "deploy": "gh-pages -d build"``` in "scripts" of package.json 
 - Run: ```$ npm run deploy```

```sh
$ npm / yarn build
$ npm / yarn run deploy
```

### Todos

 - Integrate frontend with backend
 - Form validation with Redux
 - Animation
 - storage for the images
 - labels on each item
 - **UX/UI design need**

### License

Code is open sourced under the [MIT license](LICENSE.md).