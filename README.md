# framer-seed

![framer-seed screenshot](https://cloud.githubusercontent.com/assets/604167/14765101/cff41b58-0986-11e6-9263-b00a186bdf6b.jpg)

This project is lets you work with the original, deprecated [Framer Library](https://web.archive.org/web/20200513100506/https://classic.framer.com/docs/).

You can use this project to create a local development environment similar to [Framer Classic](https://web.archive.org/web/20210116175257/https://classic.framer.com/).

With this sytem you are able to stay within your preferred operating system, editor, and WebKit-compatible browser environment.

## Table of Contents

-   [Requirements](#requirements)
-   [Installation](#installation)
-   [Quick Start](#quick-start)
-   [Commands](#commands)
-   [Previewing & Distribution](#previewing--distribution)
-   [Importing/Exporting](#importingexporting)
-   [Framer Library Version](#framer-library-version)

## Requirements

-   [node](https://nodejs.org) (v18.16.x)

The project may work on earlier/later versions of the above, but it has not been officially tested.

## Installation

1. Clone the repository
2. `cd` into the created directory
3. Run `npm install`

## Quick Start

After the install has completed, run `npm start` to launch a local server at [http://localhost:3000](http://localhost:3000) and add your Framer code to `app.coffee` in the `src` folder.

Any changes you make to `app.coffee` or your [modules](https://web.archive.org/web/20200513100506/https://classic.framer.com/docs/#modules.modules) will refresh the page automatically.

## Commands

-   `npm start` - Runs a local web server at [http://localhost:3000](http://localhost:3000) and refreshes the page when changes are made
-   `npm run build` - Compiles `app.coffee` and required modules for distribution
-   `npm install` - Downloads and builds webpack and other dependencies

## Previewing & Distribution

Run `npm start` to view your prototype at [http://localhost:3000](http://localhost:3000).

Your Framer prototype can also be viewed on other devices on your local network by pointing your device's WebKit-compatible browser to your local IP at port `3000` (e.g., [http://192.168.0.100:3000](http://192.168.0.100:3000)). Any device type rendering will be hidden appropriately.

If you need to distribute your prototype, run `npm build` to generate a build in the `dist` folder. Open `index.html` in any WebKit-compatible browser to view your prototype. Note that default device type renderings may not appear if you do not have an internet connection.

## Importing/Exporting

Existing Framer projects can be easily imported into this project by copying the following files/folders from your `project.framer` folder into the project's `src` directory:

-   `app.coffee`
-   `modules/` (optional if you do not have any modules)
-   `images/` (optional if you do not have any locally referenced images)
-   `imported/` (optional if you do not have any imported Sketch/Photoshop assets)

## Framer Library Version

This project includes the last version of the Framer library (3.0.0).

Since the library is no longer being updated, there is no longer any reason to maintain the system for fetching and building the latest version.
