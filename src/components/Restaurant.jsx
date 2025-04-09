import { CDN_URL } from "../utils/constants";

const Restaurant = ({ name, cuisines, rating, time, cost, locality, cloudinaryImageId }) => {
    return (
        <div className="rounded-lg  bg-gray-30 border border-gray-200 shadow-md p-4 hover:shadow-xl transition">
            <img
                className="w-full h-40 object-cover rounded-md mb-2"
                src={CDN_URL + cloudinaryImageId}
                alt={name}
            />
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600 text-sm">{cuisines.join(", ")}</p>
            <div className="text-sm mt-2 flex justify-between text-gray-800">
                <span>⭐ {rating}</span>
                <span>⏳ {time} mins</span>
                <span>💰 {cost}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">{locality}</p>
        </div>
    );
};

export default Restaurant;
