import React from 'react';
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className='menu-item__background-image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='menu-item__content'>
      <h1 className='menu-item__content-title'>{title}</h1>
      <span className='menu-item__content-subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
