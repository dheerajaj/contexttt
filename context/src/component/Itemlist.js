import React from 'react';
import { useAppContext } from './Context';

const ItemList = () => {
  const { itemCounts, increment, decrement } = useAppContext();

  const handleItemClick = (item, action) => {
    if (action === 'increment') {
      increment(item);
    } else if (action === 'decrement') {
      decrement(item);
    }
  };

  const renderItems = () => {
    const items = ['Akash', 'Deepak', 'Dheeraj','Ajay','Varun','Abhay','Sachin','Raj'];

    return items.map((item, index) => (
      <div key={index}>

        <span>{item}:Score: {itemCounts[item]}</span>
        <div style={{marginLeft:"20px"}}>
        <button onClick={() => handleItemClick(item, 'increment')}>+</button>
        <button onClick={() => handleItemClick(item, 'decrement')}>-</button></div>
  
      </div>
    ));
  };

  return (
    <div>
      <h2>Item List</h2>
      {renderItems()}
    </div>
  );
};

export default ItemList;
