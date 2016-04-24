# framer-bootstrap

![framer-bootstrap screenshot](https://cloud.githubusercontent.com/assets/604167/14765101/cff41b58-0986-11e6-9263-b00a186bdf6b.jpg)

This project is meant to get you started with [Framer.js](https://framerjs.com/docs/) as quickly as possible.

You can use this project to create a local development environment similar to [Framer](https://framerjs.com/) (previously Framer Studio).

A benefit of using this versus Framer is that you are able to stay within your preferred editor and browser environment.

## Requirements

* [node](https://nodejs.org) (v4.4.x)
* [npm](https://www.npmjs.com/) (v2.14.x)

The project may work on earlier/later versions of the above, but it has not been officially tested.

## Installation

1. Clone the repository
2. `cd` into the created directory
3. Run `npm install`

## Quick Start

After the install has completed, run `gulp` to launch a local server at [http://localhost:3000](http://localhost:3000). Any changes you make to `app.coffee` will automatically refresh the page automatically.

## Previewing

Your Framer prototype can be viewed on other devices on your local network by pointing your device's browser to your local IP at port `3000` (e.g. [http://192.168.0.100:3000](http://192.168.0.100:3000)). Any device type rendering will be hidden appropriately.

## Why CoffeeScript?

[CoffeeScript](http://coffeescript.org/) is the preferred language for Framer.js. The docs are all written with respect to CoffeeScript.

While most editors don't come with syntax highlighting or autocompletion for CoffeeScript (and Framer.js syntax), there are many packages readily availble that accomplish these features.

### Sublime Text 3

* [sublime-better-coffeescript](https://github.com/aponxi/sublime-better-coffeescript)
* [SublimeCompletionFramerjs](https://github.com/awt2542/SublimeCompletionFramerjs)

## Roadmap

* Import assets from Sketch and Photoshop
* Package for offline use (no webserver dependency)
