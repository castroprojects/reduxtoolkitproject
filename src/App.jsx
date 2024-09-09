import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import ImageOption from './components/ImageOption';
import ItemsBar from './components/itemsBar';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';


function App() {
  

  return (
      <Provider store={store}>
        <div id="container">
        
          <Header/>
          <div id="smallContainer-2">
              <Outlet/>

              <ItemsBar/>
          </div>
          
          
        
        </div>
      
      
      
    </Provider>
  )
}

export default App;
