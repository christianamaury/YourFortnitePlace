
// useState holds my information & useEffect runs my fetch call when the component mounts
import React, {Component, useState, useEffect} from 'react';
import '../App.css';

function Shop() {

    const fetchItems = async () => {

      // Previous API: https://fornite-public-api.theapinetwork.com/prod09/upcoming/get
      const data = await fetch ('https://fortnite-api.theapinetwork.com/upcoming/get');



    }

    return (
    <div>
      <h1> Shop Page </h1>
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
