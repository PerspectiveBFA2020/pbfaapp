import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSession } from '../firebase/UserProvider';
import Header from '../Header';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user, isAdmin } = useSession();

  return (
    <Route
      {...rest}
      render={(props) => {
        const id = props.match.params.id;

        if (!!user && (user.uid === id || isAdmin)) {
          return (<Component {...props} />);
        } else {
          //return (<Component {...props} />);
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;


