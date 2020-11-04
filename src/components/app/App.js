import React, { useState } from 'react';
import styles from './App.module.css';

const App = () => {

  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //     fetch('https://5fa06868e21bab0016dfd1c6.mockapi.io/UsersRequest')
  // });

  const getUsersData = async () => {
      const response = await fetch('https://5fa06868e21bab0016dfd1c6.mockapi.io/UsersRequest');
      const users = await response.json();
      for (let i = 0; i < users.length; i++) {
        // let userResponse = 
        let user = users[i]['user' + (i+1)];
        console.log(users[i]);
        console.log(user.id);
        console.log(user.name);
        console.log(user.image);
        console.log("***");
      }
  }

  return (
    <div>
      <button onClick= {getUsersData}>test</button>
    </div>
  );
}

export default App;