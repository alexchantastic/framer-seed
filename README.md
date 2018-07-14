# framer-seed

![framer-seed screenshot](https://cloud.githubusercontent.com/assets/604167/14765101/cff41b58-0986-11e6-9263-b00a186bdf6b.jpg)

This project is meant to get you started with [Framer Library](https://framer.com/docs/) as quickly as possible.

You can use this project to create a local development environment similar to [Framer](https://framer.com/).

A benefit of using this versus Framer is that you are able to stay within your preferred operating system, editor, and WebKit-compatible browser environment.

## Table of Contents

* [Requirements](#requirements)
* [Installation](#installation)
* [Quick Start](#quick-start)
* [Commands](#commands)
* [Previewing & Distribution](#previewing--distribution)
* [Importing/Exporting](#importingexporting)
* [Framer Library Version](#framer-library-version)

## Requirements

* [node](https://nodejs.org) (v8.11.x)
* [yarn](https://yarnpkg.com) (v1.7.x)

The project may work on earlier/later versions of the above, but it has not been officially tested.

## Installation

1. Clone the repository
2. `cd` into the created directory
3. Run `yarn install`

## Quick Start

After the install has completed, run `yarn dev` to launch a local server at [http://localhost:3000](http://localhost:3000) and add your Framer Library code to `app.coffee` in the `src` folder.

Any changes you make to `app.coffee` or your [modules](https://framer.com/docs/#modules.modules) will refresh the page automatically.

## Commands

* `yarn start` - Runs a local web server at [http://localhost:3000](http://localhost:3000) and refreshes the page when changes are made
* `yarn build` - Compiles `app.coffee` and required modules for distribution
* `yarn install` - Downloads and builds the defined version of Framer Library (defaults to the latest build)

## Previewing & Distribution

Run `yarn start` to view your prototype at [http://localhost:3000](http://localhost:3000).

Your Framer prototype can also be viewed on other devices on your local network by pointing your device's WebKit-compatible browser to your local IP at port `3000` (e.g., [http://192.168.0.100:3000](http://192.168.0.100:3000)). Any device type rendering will be hidden appropriately.

If you need to distribute your prototype, run `yarn build` to generate a build in the `dist` folder. Open `index.html` in any WebKit-compatible browser to view your prototype. Note that default device type renderings may not appear if you do not have an internet connection.

## Importing/Exporting

Existing Framer projects can be easily imported into this project by copying the following files/folders from your `project.framer` folder into the project's `src` directory:

* `app.coffee`
* `modules/` (optional if you do not have any modules)
* `images/` (optional if you do not have any locally referenced images)
* `imported/` (optional if you do not have any imported Sketch/Photoshop assets)

You can use [Framer Generator](https://builds.framerjs.com/version/latest/Framer.zip) to export assets from [Sketch](https://www.sketchapp.com/), [Figma](https://www.figma.com/), or [Photoshop](http://www.adobe.com/products/photoshop.html).

Alternatively, you can copy the same folders to your `project.framer` folder from your framer-seed project to import back into Framer.

## Framer Library Version

Running `yarn install` on this project automatically grabs the latest build of Framer Library. If you want to update the version of Framer Library that is being used, you can either run `yarn install` again or grab the [latest build](https://builds.framerjs.com/version/latest/Framer.zip) of Framer Library and copy `framer.js` into the `src/framer/` directory.

Sometimes the latest build of Framer Library can be beta build so you might want/need to peg your project to a certain version. You can do this by pointing the `framerjs` dependency in `package.json` to a given version.

```
...
"dependencies": {
  "framerjs": "3.0.0"
},
...
```

Or, you can point it to a given commit hash.

```
...
"dependencies": {
  "framerjs": "git+ssh://git@github.com:koenbok/Framer.git#e33b16c"
},
...
```

You can also find a list of builds at [http://builds.framerjs.com/](http://builds.framerjs.com/).
