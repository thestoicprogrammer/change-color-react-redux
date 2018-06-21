import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from "redux-thunk"
import reducers from './reducers'
import BoxCon from './containers/box-container'
import './index.css';

//create the central store
let store = createStore(reducers,applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <BoxCon />
    )
  }
}


ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>
, document.getElementById('root'));
