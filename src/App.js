// import HeaderComponent from './Components/HeaderComponent';
// import ItemComponent from './Components/ItemComponent';
// import MenuComponent from './Components/MenuComponent';
// import CategoryComponent from './Components/CategoryComponent';
// import SearchComponent from './Components/SearchComponent';
// import React, { useEffect, useState } from "react";


// const App = () => {
//   const [advice, setAdvice] = useState("");

//     useEffect(() => {
//         const url = "https://api.adviceslip.com/advice";

//         const fetchData = async () => {
//             try {
//                 const response = await fetch(url);
//                 const json = await response.json();
//                 console.log(json.slip.advice);
//                 setAdvice(json.slip.advice);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         };

//         fetchData();
//     }, []);

//   return (
//    <>
//    <HeaderComponent/>
//    <MenuComponent drinks={advice}/>
//    <SearchComponent/>
//    <CategoryComponent/>
//    <ItemComponent/>
//    </> 
//   );

// }

// export default App;
import HeaderComponent from './Components/HeaderComponent';
import ItemComponent from './Components/ItemComponent';
import CategoryComponent from './Components/CategoryComponent';
import SearchComponent from './Components/SearchComponent';
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
    <SearchComponent/>
    <CategoryComponent selectedCategory ={drinks && drinks.length>0?drinks[0].strCategory: ""}
    categoryChanged={categoryChanged}/>
    {(() => {
              if (!categoryChanged){
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