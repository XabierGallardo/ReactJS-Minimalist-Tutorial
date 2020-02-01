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

/*There are certain limitations on JSX, we cannot use the CSS's class name because it's a reserved word in JS and it's used, therefore we must use "className". 
It's a good practice to wrap everything in one root element per component. Typically everything is nested onto one root element that we'll return*/

//App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
      </div>
    );
  }
}

export default App;





/*7.	Creating a functional Component*/

//We'll add a new Folder on the source (src) folder on our project, called Person (it's a convenction to give your components a capital starting characters.
//Inside the folder, we'll create a Person.js file. Most of the time we'll use a different form of creating components. A simple js function. Because in it's simplest form, a component is just a function which returns some jsx (html).

//Person.js
//We need to import React from the react package, because the JSX syntax is transformed to react create element
import React from 'react'; //We don't need the Component, since we're not using a class which extends component, instead we're creating a function

const person = () => {
	return <p>I'm a person!</p> 
};

export default person; //We need to export constant which holds the function
//Now we can use this component in other files of our project

//App.js
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //It should have an uppercase character, because in jsx, all elements starting with lowcase characters are reserved for the native html elements

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person />
      </div>
    );
  }
}

export default App;





/*8.	Components & JSX Cheat Sheet*/

/*Components are the core building block of React apps.
Actually, React is just a library for creating components in its core.

A typical React app therefore could be depicted as a component tree -having one root component ("App") and then a pontentially infinite amount of nested child components.

Each component need to return/render some JSX code - it defines which HTML code React should render to the real DOM in the end.

JSX is not HTML but looks a lot like it. Differences can be seen when looking closely though (className vs class). JSX is just syntactic sugar for JS, allowing you to write HTMLish code instead of nested React.createElement(...) calls.

When creating components, you have the choice between two different ways:*/

	//1. Functional components 
		const cmp = () => {
			return <div> some JSX</div>
		}

	//2. Class-based components
		class Cmp extends Component {
			render() {
				return <div>some JSX</div>
			}
		}





/*9.	Re-Using Components and Outputting Dynamic Content*/

//For re-using, we can just copy our custom component <Person /> as many times as we want
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person />
	<Person />
	<Person />
      </div>
    );

//To create some dynamic content, adding a random number 

//Person.js
const person = () => { //If we want to run as JS code and not interpret as text, we'll use { }
	return <p>I'm a person and I'm {Math.floor(Math.random() * 30)} years old</p>
};

//We are using dynamic content as part of our JSX code. But one single line expressions, like simple calculations or function calls





/*10.	Working with Props*/

//Let's make our content configurable, flexible and dynamic
//App.js

return (
	<div className="App">
		<h1>Hi, I'm a React App</h1>
	        <p>This is really working!</p>
		<Person name="Xabier" age="28"/>
        	<Person name="Xan" age="26">My Hobbies: Hockey</Person>
        	<Person name="Xaquin" age="27"/>
	</div>
); //Now we have to change something in our Person component to handle that input (By default there will be no changes)

//Person.js
const person = (props) => { //We'll receive one argument in our function which is an object with all the properties of this component
	return <p>I'm {props.name} and I'm {props.age} years old!</p>
};

//When using class-based components it's "this.props"
//Now we have a reusable component with a defined template, and we're also using dynamic content





/*11.	Understanding the "children" Prop*/

//We learned how to use props, how to receive them as an argument and output them dynamically
//Now we also want to output whatever we pass between the opening and closing tag of our custom component, on App.js we have
                <Person name="Xan" age="26">My Hobbies: Hockey</Person>

//Therefore, we go to Person.js
const person = (props) => {
	return 	( //We add a parentheses so we can write over multiple lines
		<div>
			<p>I'm {props.name} and I'm {props.age} years old!</p>
			<p>{props.children}</p>
//Children refers to any elements (includes plain text) between the opening and closing tags of our component
//We can nest complex html code in-between, an unordered list with multiple list items, other react component, anything
		</div>
	);
}
//If we inspect the code on the browser console, we can see an empty paragraph, because props.children is undefined as null. We can put content into our component from outside, not only by passing props





/*12.	Understanding & Using State*/

//Sometimes we don't want to get some information from outside, but from inside a component and change it from inside too
//If we later want to change our values on App.js, we must store them inside a variable

class App extends Component{
//There's one special property you can define in any component which extends Component
//Whereas props are set and passed from outside like name and age into the person component, state is managed from inside a component

state = { //We initialize it by assigning a value and this value is a JS object
	persons: [ //We want to create an array of persons, which is an array of JS objects
		{name: 'Xabier', age: 28}, 
		{name: 'Xan', age: 27},
		{name: 'Xaquin', age: 26}
	]
}

//Now with our state defined
render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/> //this keyword refers to the class (ES6 syntax)
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Hockey</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

//Now we have the same output, this time using the state property. State can be changed if it changes, it'll lead react to re-render our DOM (or update the DOM). So if we change the name of Xan, it will be re-rendered
//On the next lesson, we'll listen to events to change the values and see how state can handle the changes





/*13.	Props & State*/
