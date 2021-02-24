import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Page2 from './site2page1';
import useQueryParam from './useQueryParam';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";


const base = '/site2';


/* This is the routes for our app number 1 */
const routes = [
  {
    path: "/home",
    component: App
  },
  {
    path: "/page1",
    component: Page2
  },
]


/* This was taken mostly as is from react-router documentation: https://reactrouter.com/web/example/route-config */
const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}


/* This function checks if a given target is defined in the routes config. If the target contains the base, te base is removed first. */
const validateTarget = (target) => {
  var final_target = target;
  if (target.includes(base)) {
    final_target = final_target.replace(base, '');    
  }
  var result = false;
  routes.map((route) => {
    if (route.path === final_target) {
      result = true;
    }
  })
  return result;
}


/* This function tries to find the route matching a target. If the target contains the base, te base is removed first. */
const getFinalTarget = (target) => {
  var final_target = routes[0]['path'];
  if (target.includes(base)) {
    target = target.replace(base, '');    
  }
  routes.map((route) => {
    if (route.path === target) {
      final_target = target;
    }
  })
  return final_target;
}


const AppRouting = () => {

  /* Refer to the PoC implementation I did a while back: https://github.com/nicc777/react-query-string-poc */
  const [target, setTarget] = useQueryParam('target', '/');

  return (
    <React.Fragment>
      <Router basename={base}>
        <React.StrictMode>
          <Switch>
            {/* The following three lines were taken mostly as is from react-router documentation: https://reactrouter.com/web/example/route-config */}
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Redirect to="/home" />
          </Switch>
          { /* The next line decides if we need to redirect based on a target parameter in the search string */ }
          { target !== '/' ? validateTarget(target) ? <Redirect to={getFinalTarget(target)}/> : null : null }
        </React.StrictMode>
      </Router>
    </React.Fragment>
  );
}


ReactDOM.render(
  <AppRouting />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
