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

//App.js
import React, { Component } from 'react';
import './App.css';

//The App component gets used in the index.js file where you render it into the place of this root
//One way of defining react components, creating a JS class and using the extends keyword to inherit from this component object or class, imported on the top from the react library
class App extends Component {
	render() { //The render method of this class is a basic component, which is render some HTML to the DOM
		return (
			<div className="App"> //Not HTML code but JSX, code or syntax we can use to write html in quotation marks
				<h1>Hi, I'm a React App</h1>
			</div>
		);
	}
}
export default App; //We export the class and import again on the index.js

//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //We take the class defined on the file App.js
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); //The App component is defined in the App.js
registerServiceWorker();




/*5.	Understanding JSX*/

//We'll modify App.js to understand JSX

//App.js
import React, { Component } from 'react';
import'./App.css';

class App extends Component {
	render() {
		//Call a method of the React object, first argument is the element we want to render to the DOM <div>
		//2nd argument is the configuration for this
		//3rd argument is any amount of children (what's nested inside the div)
		//4rd argument is what's nested on it
		return React.createElement("div", null, "h1", "Hi, I\'m a React App!!!");

		//We'll not rendered a h1 element, we rendered text, which is the default behaviour, h1 is interpreted as text
		//To render another element inside the div, we'll replace the code with another call to react create element
		return React.createElement("div", null, React.createElement("h1", null, "Does this work now?"));

		//Now to apply CSS, we'll replace the code and we'll pass a javascript object instead of null
		return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'));
	}
}

//The code we wrote is the exact equivalent as the JSX code we had. That code is compiled by one of the many build tools we got on this project. Therefore, that code is used once it's already compiled. It's important to understand that JSX is much simpler, fast and over all, whilst look like html, it isn't.




/*6.	JSX Restrictions*/
