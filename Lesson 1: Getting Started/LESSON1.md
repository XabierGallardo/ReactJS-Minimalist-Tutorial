#First React Code

Go to https://codepen.io/pen 

HTML

<div id="app"></div>

CSS

.person {
	border: 2px solid;
	display: inline-block;
	box-shadow: 0 2px 2px #ccc;
	width: 200px;
	padding: 20px;	
}

JS

//We only write the HTML code once, now we can re-use over and over

function Person(props) {
  return(
    <div className="person">
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

//We're telling React to render this function, the person component, on the specific place

ReactDOM.render(app, document.querySelector('#app'));
