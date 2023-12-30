import React from 'react';
import { AppProvider } from './component/Context';
import ItemList from './component/Itemlist';


const App = () => {
  return (
    <AppProvider>
      <div>
        <ItemList />
        
      </div>
    </AppProvider>
  );
};

export default App;
