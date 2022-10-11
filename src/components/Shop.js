
// useState holds my information & useEffect runs my fetch call when the component mounts
import React, {Component, useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import '../App.css';

function Shop() {

// useEffect function; [] runs only once
// Calling the fetchItems inside the useEffect
useEffect (() => {
fetchItems();

}, []);

//Empty items array
const [items, setItems] = useState([]);

    const fetchItems = async () => {
      // Previous API: https://fornite-public-api.theapinetwork.com/prod09/upcoming/get
      const data = await fetch ('https://fortnite-api.theapinetwork.com/upcoming/get');

      //Converting data to a JSON file:
      const items = await data.json();

      console.log(items);
      //Getting items array from the database
      //items.items because we're accessing the items object from the array;
      setItems(items.data);
    };

    // Wrapping all items within the Link
    return (
    <div>
      <h1> Shop Page </h1>
      {items.map(item => (
        <h1 key={item.itemId}>
          <Link to={`shop/${item.itemId}`}> 
              {item.item.name}
          </Link>
        </h1>
      ))}

    </div>
  );

}

export default Shop;







// // Only runs when it mounts, emppty brackets
// useEffect (() => {
//   fetchItems();
//
// }, []);
//
// // Items array from the server
// const [items, setItems] = useState([]);
//
// // Coming from a database
// const fetchItems = async () => {
//     const API_KEY = '1e5624f1-29741b92-9617574d-bfda4f42';
//     const data = await fetch (`https://fortniteapi.io/v2/items/upcoming?lang=en&app_key=${API_KEY}`);
//
//     const items = await data.json();
//     console.log(items);
//
//     //Setting the useState array;
//     setItems(items);
// }
//
// export class Shop extends Component
// {
//
//   render(){
//     return (
//           <div>
//             <h1> Shop Page </h1>
//             // Mapping Items here
//
//           </div>
//     )
//   }
// }
