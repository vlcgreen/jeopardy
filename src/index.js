import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux';
import BaseLayout from './components/layout/BaseLayout';
import reducer from './reducers'
import Categories from './components/Categories'
import Gameboard from './components/Gameboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const saveToLocalStorage = (reduxGlobalState) => {
  //serialization = converting js obj to a string

  try{
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem('state', serializeState)
  }
  catch(e){
    console.log(e)
  }
}

const loadFromLocalStorage = () => {

  const serializeState = localStorage.getItem('state');

  if(serializeState == null){
    return undefined;
  }
  else{
    return JSON.parse(serializeState)
  }
}

const persistedState = loadFromLocalStorage();

let store = createStore(reducer, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{
  saveToLocalStorage(store.getState());
})
//above code means everytime something is saved to Global state it's also saved to local storage

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
        <Switch>
          <Route exact path="/" component={Categories} />
          <Route path="/gamesettings" component={Categories} />
          <Route path="/game" component={Gameboard} />
        </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

