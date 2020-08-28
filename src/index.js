import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// COMPONENTS
import App from './components/App';

// REDUX
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// REDUCERS
import rootReducer from './reducers'
// import hacksReducer from './reducers/hacks'

// STORE
const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

ReactDOM.render(
    <Provider store = {store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);

//hi i am romeo here to check if it is working