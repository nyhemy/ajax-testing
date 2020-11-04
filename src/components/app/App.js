import React, { useState } from 'react';
import styles from './App.module.css';
import loadImg from './ajax-loader.gif';

import Card from '../card/Card';

const App = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState();

  // const [test, setTest] = useState("test goes here");

  // useEffect(() => {
  //     fetch('https://5fa06868e21bab0016dfd1c6.mockapi.io/UsersRequest')
  // // getUsersData();
  // });

  // const addUser = (user) => {
  //   setUsers(prevUsers => [...prevUsers, user])
  // }

  const getUsersData = async () => {
    setNotification("");
    setLoading(true);
    const response = await fetch('https://5fa06868e21bab0016dfd1c6.mockapi.io/UsersRequest');
    if (response.ok) {
      const fetchedUsers = await response.json();
      const userArray = [];
      for (let i = 0; i < fetchedUsers.length; i++) {

        // let userResponse = 
        let user = await fetchedUsers[i]['user' + (i+1)];
        // let id = user.id;
        // let name = user.name;
        // let image = user.image;
        
        // console.log(fetchedUsers[i]);
        // console.log(id);
        // console.log(name);
        // console.log(image);
        // console.log("***");

        userArray.push(user);
      }
      setUsers(userArray);
      setLoading(false);
    } else {
      console.log("oopsie poopsie you did a whoopsie");
      setUsers([]);
      setLoading(false);
      setNotification('Oops something went wrong');
      // throw new Error('Something went wrong');
    }
    
  }

  // const testUsers = () => {
  //   setTest("wait for it...")
  //   setTimeout(() => [setTest(users.length), console.log(users)], 1000);
  // }

  return (
    <div>
      {/* <div>{test}</div> */}
      <div className={styles.center}>
        <button className={styles.button} onClick= {getUsersData}>populate cards</button>
        {/* <button onClick= {testUsers}>testUsersState</button> */}
      </div>
      <h3 className={styles.center}>{notification}</h3>
        {loading ? <img src={loadImg} alt="loading" className={styles.loadImg} /> : users.map((user, index) => <Card id={user.id} name={user.name} image={user.image} key={index} />)}
    </div>
  );
}

export default App;