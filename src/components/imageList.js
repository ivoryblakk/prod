import React from 'react';
import './imageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
   const images = props.images.map( image => {
        return <ImageCard key={image.id} image={image}/>;
    });

    return <div className="image-list">  {images} </div>;
};

export default ImageList;

// Before deconstruction
// const images = props.images.map((image) => {
//     return <img key={image.id} alt={image.description} src={image.urls.regular} />;
// });

    // images object deconstructed
    // const images = props.images.map(({id, description, urls }) => {
    //     return <img key={id} alt={description} src={urls.regular} />;
    // });
