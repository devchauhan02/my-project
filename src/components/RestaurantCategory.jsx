import { useState } from "react";
import AccordionItemList from "./AccordionItemList";

const RestaurantCategory = ({ data , showItem, setShowIndex}) => {
  
  const toggleAccordion = () => {
    setShowIndex();
  }


  return (
    <div className="w-10/12 md:w-6/12 mx-auto"> 
      {/* Header */}
      <div
        className="flex justify-between items-center bg-white px-4 py-3 shadow-sm cursor-pointer"
        onClick={toggleAccordion}
      >
        <span className="font-bold text-lg uppercase">
          {data.title} ({data.itemCards?.length})
        </span>
        <span className={`text-xl transform transition-transform duration-300 ${showItem ? 'rotate-180' : ''}`}>
          ⌄
        </span>
      </div>

      {/* Accordion Body */}
      {showItem && (
        <div className="bg-white px-4 py-2 shadow-inner">
          <AccordionItemList items={data.itemCards} />
        </div>
      )}

      {/* Gray separator */}
      <div className="h-3 bg-gray-100"></div>
    </div>
  );
};

export default RestaurantCategory;
