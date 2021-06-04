import React from 'react';

const ImageList = (props) =>{
    const images = props.images.map((image)=>{
        return <div  key={image.id}>
            <a href={image.webformatURL}><img key={image.id} src={image.webformatURL} alt="" /></a>
        </div>
        
    })
    return(
        <div >
            
            {images}
            
            
        </div>
    )
}

export default ImageList;