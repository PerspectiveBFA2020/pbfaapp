import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSession } from '../firebase/UserProvider';
import Header from '../Header';

const ProfileRedirect = ({ component: Component, ...rest }) => {
  const { user, isAdmin } = useSession();

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? (
          <div><Header/><Component {...props} /></div>
        ) : (
          <Redirect
            to={{
              pathname: isAdmin ? '/users' : `/profile/${user.uid}`,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProfileRedirect;
