import React, {useState, useEffect} from 'react'; 
//useState holds the information we're getting from the API
//useEffect runs that fetch call when the component mounts
import { Link } from 'react-router-dom';
import './App.css';

function Shop() {
	
	//to render this, we'll use the useEffect function
	useEffect(() => {
		fetchItems();
	},[]);

	const [items, setItems] = useState([]);

	const fetchItems = async () => { //This will our fetch call
		const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
		const items = await data.json();
		console.log(items.items);
		setItems(items.items);
	};

  return (
    <div className="Shop">
	  {items.map(item => (
	  <h1 key="item.itemid"}>{item.name}
	  	<Link to={'/shop/${item.itemid}'}>{item.name}</Link>
	  </h1>
	  ))}
    </div>
  );
}

export default Shop;
