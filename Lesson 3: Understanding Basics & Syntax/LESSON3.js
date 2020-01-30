/*All Core React Concepts*/

/*1.	Why a Build Workflow?

- When building a real app, we want to optimize our code and make it faster.
- Also we want to use Next-Gen JS Features (we want to use ES6 and ES5). A build workflow compiles this features
- It's more productive (Next Generation JS Features or CSS Auto prefixing).

	How to?

- Use Dependency Management Tool (npm or yarn). 
Dependencies are 3rd party libraries (3rd party JS packages) like React, ReactDOM, also the Compiler
npm (nodes package manager) is a tool that allows us to manage packages.

- Use Bundler as a Webpack. We use a bundler to write modular code and split it up over multiple files (so each file has a clear task for easier maintenance).

- Use Compiler (Next-Gen JS) which means translation to modern features and working on older browsers.
Also Babel + Presets as part of the webpack configuration to be part of the bundling and optimisation process

- A Development Server to test our app locally on our machine. It wouldn't work if we click and open it onto the browser but it would use file protocol and wouldn't emulate the app running as it runs on a web server.*/




/*2.	Using Create React App

Instructions on
https://github.com/facebook/create-react-app 

(requires previous installation of node.js)

npm install -g create-react-app 
create-react-app my-app
cd my-app/
npm start

Don't quit the process while developing, it will reflect the latest changes*/




/*3.	Understanding the folder structure

(Make sure that npm start is running whenever you're working on our code).
On the root level, we have some configuration files. 

package.json:	The general dependencies our project have are found in here.

node_modules: 	This folder holds all dependencies and subdependencies of our project.

public:		This is the root folder gets served by the web server, holds the files we can edit. 

public/index.html:	(We'll never add more html pages in this project). This is the single page where in the end our scrip files will get injected by that build workflow.
<div id="root"> will be where we actually mount our react app later.
We can also add imports, other libraries, css libraries in this file.

src: 		Holds the script files we'll work with. This is actually our React Application. 

src/index.js:	Get access to the div root element. We can see the render method that renders our React app.

src/App.js:	First and only React component we have in this starting project. On this file, let's remove all content on the div and add the next lines: <h1>Hi, I'm a React App</h1>

src/App.css:	Defines the stylings we use in the app.js file. We can remove everything in there as well, except .App{...}

src/index.css:	Also applies styles, which also applies styles globally. Used mostly as a general set up for the application.

src/registerServiceWorker.js:	Important for registering a service worker.

src/App.test.js:	Allows us to reate unit tests for the different units (for example, components in our application).


This is the general setup, for the majority of the tutorial, we'll work in App.js or other new components. Let's analize App.js:*/




/*4.	Understanding Components Basics*/

import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi, I'm a React App</h1>
			</div>
		);
	}
}
