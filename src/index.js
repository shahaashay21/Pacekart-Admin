import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

// Components
import { LayoutRoute, MainLayout } from './components/Layout';

// Containers
import Home from './containers/home';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';

// Reducers
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
              <Route exact path = "/login" component = { Login } />
              <Route exact path = "/signup" component = { Signup } />
              {/* <Route exact path = "/testing" component = { Testing } /> */}
              <LayoutRoute
                  exact
                  path = "/"
                  layout = { MainLayout }
                  component = { Home }
                  activePage = "home"
              />
              <LayoutRoute
                  exact
                  path = "/products"
                  layout = { MainLayout } 
                  component = { Home }
              />
              <LayoutRoute
                  exact
                  path = "*"
                  layout = { MainLayout }
                  component = { Home }
                  activePage = "home"
              />
          </Switch>
      </BrowserRouter>
    </Provider>
, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
