import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";  

const RestaurantMenu = () => {
    const [restMenu, setRestMenu] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            MENU_API + id
        );
        const json = await data.json();
        setRestMenu(json?.data);
    }

    if (!restMenu)
        return <Shimmer />
    
    const { name, cuisines, costForTwoMessage } = restMenu?.cards[2]?.card?.card?.info;
    const { itemCards } = restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    
    const categories = restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
          c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
      
    return (
        <div className="text-center">
            <h2 className="font-bold my-6 text-2xl">{name}</h2>
            <h3 className="text-lg  font-bold mb-5">{cuisines?.join(", ")}</h3>
            {categories.map((category) => <RestaurantCategory key = {category?.card?.card.title} data = {category?.card?.card}/>)}
        </div>
    );
};

export default RestaurantMenu;
