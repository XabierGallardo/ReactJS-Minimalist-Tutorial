import React from 'react'; 
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import ItemDetail from './ItemDetail'>
//Now we want to import specific things from react-router-domas 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

//Route renders out the component based on the URL

function App() { 
	return (
		//Everything behind this <Router> will have the hability to use routing
		<Router> 
			<div className="App">
				<Nav />
				<Switch>// The switch stops the whole process of going further than /
				//The switch component, as soon as it founds the route, only renders the component specified in the path
					<Route path"/" exact component={Home}/> 
					//The exact keyword tells React, only when there's a "/", it should render a component
					<Route path="/about" component={About}/>
					<Route path="/shop" exact component={Shop}/>
					<Route path="/shop/:id" component={ItemDetail} />
				</Switch>
			</div>
		</Router>
	);
}

const Home = () => (
	<div>
		<h1>Home page</h1>
	</div>
);

export default App;
