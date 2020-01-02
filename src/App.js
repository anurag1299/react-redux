import React from 'react';
import {  Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    {/* <CakeContainer /> */}
    <HooksCakeContainer></HooksCakeContainer>
    <IceCreamContainer></IceCreamContainer>
    </div>
    </Provider>
  );
}

export default App;
