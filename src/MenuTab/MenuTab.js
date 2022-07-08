import React from 'react';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import './MenuTab.scss';

const MenuTab = () => {
  return (
    <div className="menuTab">
      <h1 className="title">Menu Tab</h1>
      <ul className="tabs">
        <li>First</li>
        <li>Second</li>
        <li>Third</li>
      </ul>
      <div className="contents">
        <First />
      </div>
    </div>
  );
};

export default MenuTab;
