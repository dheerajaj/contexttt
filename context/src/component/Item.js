import React from 'react';
import { useAppContext } from './Context';

const Item = () => {
  const { count } = useAppContext();

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        <li>Akash</li>
        <li>Deepak</li>
        <li>Dheeraj</li>
        <li>Ajay</li>
        <li>Varun</li>
        <li>Abhay</li>
        <li>Sachin</li>
        <li>Raj</li>
      </ul>
      <p>Count: {count}</p>
    </div>
  );
};

export default Item;
