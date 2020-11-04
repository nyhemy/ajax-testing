import React, { useState } from 'react';
import styles from './App.module.css';
import loadImg from './ajax-loader.gif';

import Card from '../card/Card';

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState();

  const getUsersData = async () => {
    setNotification("");
    setLoading(true);
    const response = await fetch('https://5fa06868e21bab0016dfd1c6.mockapi.io/UsersRequest');

    if (response.ok) {
      const fetchedUsers = await response.json();
      const userArray = [];

      for (let i = 0; i < fetchedUsers.length; i++) {
        let user = await fetchedUsers[i]['user' + (i+1)];
        userArray.push(user);
      }
      setUsers(userArray);
      setLoading(false);

    } else if (response.status >= 400){
      setUsers([]);
      setLoading(false);
      setNotification('Oops something went wrong');
    }
  }

  return (
    <div>
      <div className={styles.center}>
        <button className={styles.button} onClick= {getUsersData}>populate cards</button>
      </div>
      <h3 className={styles.center}>{notification}</h3>
        {loading ? <img src={loadImg} alt="loading" className={styles.loadImg} /> : users.map(
          (user, index) => <Card name={user.name} image={user.image} key={index} />
        )}
    </div>
  );
}

export default App;