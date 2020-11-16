import React from 'react';
import './App.css';
import './firebase/config';
import './pages/Signup';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { UserProvider } from './firebase/UserProvider';
import Profile from './pages/Profile';
import ProfileRedirect from './router/ProfileRedirect';
import PrivateRoute from './router/PrivateRoute';
import PublicRoute from './router/PublicRoute';
import AdminRoute from './router/AdminRoute';
import Users from './pages/Users';


import Temp from './components/temp';
import Home from './components/Home2';
import Designer from './components/Designer';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>

        <div className="app">

            <Switch>

              <AdminRoute exact path="/temp" component={Temp} />
              <AdminRoute exact path="/home" component={Home} />
              <ProfileRedirect exact path="/signup" component={Signup} />
              <PrivateRoute exact path="/profile/:id" component={Profile} />
              <ProfileRedirect exact path="/login" component={Login} />
              <PublicRoute exact path="/designers/:name" component={Designer} />
              <AdminRoute exact path="/users" component={Users} />
              <Route exact path="/">
                <Redirect to="/temp" />
              </Route>
            </Switch>
          </div>
        
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
