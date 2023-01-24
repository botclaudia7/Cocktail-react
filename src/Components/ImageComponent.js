import '../App.css';
import ItemComponent from './ItemComponent';
function ImageComponent({categoryChanged}) {
    return (
     <>
        <div className='title-drink'>title</div>
        <div className='image-drink'>img</div>
        <button  className='back-button' onClick={() => !categoryChanged}>Back</button>
        {(() => {
              if (!categoryChanged){
                  return (
                    <ItemComponent/>   
                    )
              }
              
      })()}
    </>
    );
}

export default ImageComponent;