import React from 'react';
import { Link } from 'react-router-dom';
import {useAuth0} from '@auth0/auth0-react'
function MainPage() {

  const { loginWithRedirect,isAuthenticated ,logout} = useAuth0();

  return (
    <div style={styles.routing}>
      <ul>
        <li>
          {isAuthenticated?
          <button onClick={logout}>Logout</button>
          :
          <button onClick={() => loginWithRedirect()}>Log In</button>
          }
          
          </li>
        <li><Link to="/createTodo">Create todos</Link></li>
        <li><Link to="/todos">Show todos</Link></li>
      </ul>
    </div>
  );
}

const styles = {
  routing: {
    backgroundColor: "pink",
    width:"100%",
    height:"100px"
  }
};

export default MainPage;
