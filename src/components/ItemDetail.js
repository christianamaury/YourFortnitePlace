// useState holds my information & useEffect runs my fetch call when the component mounts
import React, {Component, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import '../App.css';

function ItemDetail() {
// useEffect function; [] runs only once
// Calling the fetchItems inside the useEffect
// useEffect (() => {
//   fetchItems();
//
// }, []);

const params = useParams();

//Empty item array; Object inside the parameter
//Adding an object into the useState since there's an image object
const [item, setItem] = useState({
      images: {}

});

//https://fortnite-api.theapinetwork.com/item/get?id={{itemid}}
// Specific Item API
const fetchItems = async () => {

    // const data = await fetch (`https://fortnite-api.theapinetwork.com/item/get?id=${params.id}`);
    // //Converting data into JSON
    // const item = await data.json();
    // setItem(item);
    // console.log(item);

};
    // Wrapping all items within the Link
    return (
    <div>
        <h1> Item </h1>
        <img src={item.images.transparent} alt ="" />
    </div>
  );

}

export default ItemDetail;
