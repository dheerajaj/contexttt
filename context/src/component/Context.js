// import React, { createContext, useContext, useState } from 'react';

// const AppContext = createContext();

// export const useAppContext = () => {
//   return useContext(AppContext);
// };

// export const AppProvider = ({ children }) => {
//   const [itemCounts, setItemCounts] = useState({
//     Akash: 0,
//     Deepak: 0,
//     Dheeraj: 0,
//   });

//   const increment = (item) => {
//     setItemCounts((prevCounts) => ({
//       ...prevCounts,
//       [item]: prevCounts[item] + 1,
//     }));
//   };

//   const decrement = (item) => {
//     setItemCounts((prevCounts) => ({
//       ...prevCounts,
//       [item]: prevCounts[item] - 1 >= 0 ? prevCounts[item] - 1 : 0,
//     }));
//   };

//   return (
//     <AppContext.Provider value={{ itemCounts, increment, decrement }}>
//       {children}
//     </AppContext.Provider>
//   );
// };


import React, { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [itemCounts, setItemCounts] = useState ({});
  const [altercount, setAltercount] =useState({});

  // const alternateItem = {
  //   Akash: 'Dheeraj',
  //   Deepak: 'Ajay',
  //   Dheeraj: 'Akash',
  //   Ajay: 'Deepak',
  // };

  useEffect(() => {
    const items = ['Akash', 'Deepak', 'Dheeraj', 'Ajay', 'Varun', 'Abhay', 'Sachin', 'Raj'];

    const startCounts = {};
    const alterCounter = {};

    items.forEach((item, index) => {
      startCounts[item] = 0;

      let alterIndex;
      if (index % items.length === 0 || index % items.length === 2) {
        alterIndex = index === 0 ? 2 : 0;
      } else if (index % items.length === 1 || index % items.length === 3) {
        alterIndex = index === 1 ? 3 : 1;
      } else if(index % items.length === 4 || index % items.length === 6){
        alterIndex = index === 4 ? 6 : 4;
      } else if(index % items.length === 5 || index % items.length === 7){
        alterIndex = index === 5 ? 7 : 5;
      }
      

      const alterItem = items[alterIndex];
      alterCounter[item] = alterItem;
    });

    setItemCounts(startCounts);
    setAltercount(alterCounter);
  }, []);


  const increment = (item) => {
    const alteritem = altercount[item];
    if (alteritem) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        // [item]: prevCounts[item] + 1,
        [alteritem]: prevCounts[alteritem] + 1 ,
      }));
    }
  };

  const decrement = (item) => {
    const alteritem = altercount[item];
    if (alteritem && itemCounts[alteritem] > 0) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        // [item]: prevCounts[item] - 1 >= 0,
        [alteritem]: prevCounts[alteritem] - 1,
      }));
    }
  };

  return (
    <AppContext.Provider value={{ itemCounts, increment, decrement }}>
      {children}
    </AppContext.Provider>
  );
};
