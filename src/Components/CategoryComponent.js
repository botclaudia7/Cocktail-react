import '../App.css';
import React, { useEffect } from "react";
import SearchComponent from './SearchComponent';

function CategoryComponent({selectedCategory}) {
  useEffect(() => {
  },[selectedCategory]);
        return(
      <>
       <SearchComponent/>
 
      { 
      <h2>
        <span>
          {selectedCategory}
        </span>
       </h2>
       }
      </>);
    
  }

export default CategoryComponent;


