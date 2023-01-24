import '../App.css';
import ItemMenu from './ItemMenu';

function MenuComponent({drinks}) {
    return (
        <>
        <ul className='menu'>
            <ItemMenu drinks={drinks}/>
        </ul>
       </>
    );
}

export default MenuComponent;