import HeaderComponent from './Components/HeaderComponent';
import ItemComponent from './Components/ItemComponent';
import MenuComponent from './Components/MenuComponent';
import FooterComponent from './Components/FooterComponent';

import React, { useEffect, useState } from "react";
import ImageComponent from './Components/ImageComponent';

function App() { 
  const [drinks, setDrinks] = useState([]);

  const fetchData = () => {
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
          .then((response) => response.json())
          .then((data) => setDrinks(data.drinks));

  }

  useEffect(() => {
    fetchData();
  },[])
  const categoryChanged=true;
  return (
    <>
    
    <HeaderComponent/>
    <MenuComponent drinks={drinks}/>

    {(() => {
              if (categoryChanged){
                  return (
                    <ItemComponent/>   
                    )
              }
              else{
                return(
                <ImageComponent categoryChanged={categoryChanged}/>
                )
              }
              
      })()}
      <FooterComponent/>

    </>
  );
}

export default App;