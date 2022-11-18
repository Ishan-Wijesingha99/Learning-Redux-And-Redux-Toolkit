import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css'



// this is where we create the store
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';

// for every reducer you want to create, you need to create a new file in features
import userReducer from './features/user'

// the provider is a JSX element that indicates to react that every JSX element wrapped inside of this provider element has access to the store. Because we want the states in the store to be accessed globally, it makes sense to add this at the highest level in index.js

// we pass an object that has reducers in it
// we have a reducer for each state in our store
// a reducer is a function that takes
const store = configureStore({
  reducer: {
    user: userReducer
  }
})




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

