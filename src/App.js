import HeaderComponent from './Components/HeaderComponent';
import MenuComponent from './Components/MenuComponent';
import FooterComponent from './Components/FooterComponent';

import React, { useEffect, useState } from "react";

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
  return (
    <>
    
    <HeaderComponent/>
    <MenuComponent drinks={drinks}/>
    <FooterComponent/>

    </>
  );
}

export default App;