import React from 'react'; 
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
//Now we want to import specific things from react-router-domas 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

//Route renders out the component based on the URL

function App() { 
	return (
		//Everything behind this <Router> will have the hability to use routing
		<Router> 
			<div className="App">
				<Nav />
				<Route path"/" component={Home}/>
				<Route path="/about" component={About}/>
				<Route path="/shop" component={Shop}/>
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
