import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props =>{

    const items = props.images.map(element => {
      return  <ImageCard key={element.id} image={element} />
    });

  return (
  <div className="image-list">
      {items}
  </div>);
};

export default ImageList;