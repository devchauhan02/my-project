import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

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
        console.log(json);
        setRestMenu(json?.data);
    }

    if (!restMenu)
        return <Shimmer />

    const { name, cuisines, costForTwoMessage } = restMenu?.cards[2]?.card?.card?.info;
    const { itemCards } = restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card

    return (
        <div className="restaurantMenu">
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <div className="menu">
                <h2>
                    Menu
                </h2>
                <ul>
                    {itemCards.map(item => 
                    <li key = {item.card.info.id}>{item.card.info.name} - {"Rs."}{item.card.info.price / 100}</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default RestaurantMenu;
