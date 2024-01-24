import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div style={styles.routing}>
      <ul>
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
