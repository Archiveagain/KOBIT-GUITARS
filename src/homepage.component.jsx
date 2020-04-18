import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
  return(
    <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Acoustic</h1>
          <span className="subtitle">BUY NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Classic</h1>
          <span className="subtitle">BUY NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Gypsy Jazz</h1>
          <span className="subtitle">BUY NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Fender</h1>
          <span className="subtitle">BUY NOW</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Gibson</h1>
          <span className="subtitle">BUY NOW</span>
        </div>
      </div>
    </div>
  </div>
  )
  
}

export default HomePage;