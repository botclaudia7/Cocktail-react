import '../App.css';

const CocktailTemplate = ({cocktailData})  =>{
  console.log("in temp");

    return (
        <>
        <div className='new-cocktail' name='main-div'>
           <img  className='new-cocktail-image' alt="tesgt" src='https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg'/> 
           <form className= 'form-cocktail'  name='cocktail'>
                <input type='text' name='cocktailName' >cocktailData[0]</input>
                <input type='text' name='cocktailIngredient1' >cocktailData[1]</input>
                <input type='text'  name='cocktailIngredient2'>cocktailData[2]</input>
                <input type='number'  name='cocktailQty' ></input>
           </form>
         </div>

       </>
    );
}

export default CocktailTemplate;




