import React from 'react';
import CollectionItem from './CollectionItem';
import { Link } from 'react-router-dom';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='collection-preview__title'>
        <Link to={`/shop/${title.toLowerCase()}`}>{title}</Link>
      </h1>
      <div className='collection-preview__preview'>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
