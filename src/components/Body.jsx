import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listRest, setListRest] = useState([]);
    const [searchTxt, setSearchText] = useState("");
    const [filterAllRestraunt, setFilterAllRestraunt] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();

        const restaurants = json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (!restaurants) {
            console.error("Unexpected API structure. No restaurants found.");
            return;
        }

        setListRest(restaurants);
        setFilterAllRestraunt(restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
        return (
            <h1>You Are OffLine</h1> 
            
        ); 

    const filterTopRated = () => {
        const filteredList = listRest.filter((res) => res.info.avgRating > 4.2);
        setFilterAllRestraunt(filteredList);
    };

    const filterRestaurants = () => {
        const filteredList = listRest.filter((res) =>
            res.info.name.toLowerCase().includes(searchTxt.toLowerCase())
        );
        setFilterAllRestraunt(filteredList);
    };

    return listRest.length === 0 ? <Shimmer /> : (
        <div className="body p-8">
        <div className="searchBar flex gap-4 mb-6">
          <input
            type="text"
            className="border border-gray-400 rounded px-4 py-2 w-60"
            placeholder="Search restaurants..."
            value={searchTxt}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="bg-green-100 px-4 py-2 rounded cursor-pointer" onClick={filterRestaurants}>
            Search
          </button>
          <button className="bg-gray-100 px-4 py-2 rounded cursor-pointer" onClick={filterTopRated}>
            Top Rated Restaurants
          </button>
        </div>
      
        <div className="restaurant-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterAllRestraunt.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.info.id}`}
              key={restaurant.info.id}
              className="restaurant-link"
            >
              <Restaurant
                name={restaurant.info.name}
                cuisines={restaurant.info.cuisines}
                rating={restaurant.info.avgRating}
                time={restaurant.info.sla?.deliveryTime}
                cost={restaurant.info.costForTwo}
                serviceability={restaurant.info.sla?.serviceability}
                cloudinaryImageId={restaurant.info.cloudinaryImageId}
              />
            </Link>
          ))}
        </div>
      </div>
      
    );
};

export default Body;
