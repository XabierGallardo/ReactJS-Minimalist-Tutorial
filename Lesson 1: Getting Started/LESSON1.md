#First React Code

1. Go to https://codepen.io/pen 
2. Go to JS settings
3. Select Babel in "JavaScript Preprocessor"
4. Select React and ReactDOM in "Add External Scripts/Pens"



#CODE

HTML_________________

<div id="app"></div>

CSS_________________

.person {
	border: 2px solid;
	display: inline-block;
	box-shadow: 0 2px 2px #ccc;
	width: 200px;
	padding: 20px;	
}

JS_________________

//The argument props contains all the attributes we add to our components (Xan, Xose)
function Person(props) {
  return(
    <div className="person">
    //We output dynamic content in ReactJS between "{}"
      <h1>{props.name}</h1>
      <p>Your Age: {props.age}</p>
  	</div>
  );
}

//We store the information on this var
var app = (
  <div>
      <Person name="Xan" age="28"/>
      <Person name="Xose" age="29"/>
  </div>
);

//The ReactDOM object uses render method, to render this function(the person component, onto the specific place)
ReactDOM.render(app, document.querySelector('#app'));



#Explanation
ReactDOM is another package for the React Team.
- React is the logic for creating the components.
- ReactDOM is about rendering this components to the real DOM

Babel is a tool to compile the next-generation JS to code that works on the browser. It compiles .jsx files

.jsx is like JavaScript version of HTML

In it's basic form React Component it's just a function

The render method allow us to render a JavaScript function as a component to the real DOM

The idea is to write the HTML code once, and being able to re-use over and over

