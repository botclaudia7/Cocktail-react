import CategoryComponent from "./CategoryComponent";
function  ItemMenu  ({drinks}) {
  const myFunction = (selectedCategory) => {
        console.log('ItemMenu '+selectedCategory.drinksObj.strCategory);
        return(
            <>
            <CategoryComponent selectedCategory={selectedCategory.drinksObj.strCategory}/>
            </>
        )
    } 
    return (
        <>
          {drinks && drinks.length > 0 && drinks.map((drinksObj, index) => (
            <li key={drinksObj.strCategory}>
                <button onClick={() => myFunction({drinksObj})}>{drinksObj.strCategory}</button>
            </li>
          ))}
       </>
    );

    
};

export default ItemMenu;
