const AccordionItemList = ({ items }) => {
    return (
        <div className="mt-2 ">
            {items?.map((item) => (
                <div
                    key={item.card.info.id}
                    className="border-b py-2 flex justify-between items-center"
                >
                    <div>
                        <h4 className="font-medium text-start mb-1">{item?.card?.info?.name}</h4>
                        <p className="text-sm text-start mb-2 font-medium" >₹{item?.card?.info?.defaultPrice / 100}</p>
                        <p className="text-sm text-start text-green-800 font-bold mb-3" >*{item?.card?.info?.ratings?.aggregatedRating?.rating} ({item.card.info.ratings.aggregatedRating.ratingCountV2})</p>
                        <p className=" text-sm text-start w-125">₹{item?.card?.info?.description}</p>
                    </div>
                    <div className="">
                        {/* Optional: Image if available */}
                        {item.card.info.imageId && (
                            <img
                                src={`https://media-assets.swiggy.com/swiggy/image/upload/${item?.card?.info?.imageId}`}
                                alt={item.card.info.name}
                                className="w-40 h-35 object-cover rounded-lg cursor-pointer "
                            />

                        )

                        }
                        <div className="flex flex-col">
                            <button className="font-bold text-center m-auto rounded-xl shadow-2xl w-30 py-2 bg-white  text-green-600 cursor-pointer hover:bg-gray-50">ADD</button>
                            <span className="text-gray-600 text-xs">Customisable</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AccordionItemList;
