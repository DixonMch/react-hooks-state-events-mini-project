import React from "react";
import { CATEGORIES } from "../data";

function CategoryFilter() {
  const handleClick = (category) => {
    // handle button click here
  };

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {CATEGORIES.map((category) => (
        <button key={category} onClick={() => handleClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
