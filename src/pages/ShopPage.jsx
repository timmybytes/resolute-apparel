import React from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../components/CollectionPreview';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className='shop-page'>
        {collections
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
      </div>
    );
  }
}

export default ShopPage;
