import React, { useState } from 'react';
import styles from './App.module.css';

import Card from '../card/Card';

const App = () => {

  const [users, setUsers] = useState([]);
  const [test, setTest] = useState("test goes here");

  // useEffect(() => {
  //     fetch('https://5fa06868e21bab0016dfd1c6.mockapi.io/UsersRequest')
  // // getUsersData();
  // });

  // const addUser = (user) => {
  //   setUsers(prevUsers => [...prevUsers, user])
  // }

  const getUsersData = async () => {
      const response = await fetch('https://5fa06868e21bab0016dfd1c6.mockapi.io/UsersRequest');
      const fetchedUsers = await response.json();
      const userArray = [];
      for (let i = 0; i < fetchedUsers.length; i++) {

        // let userResponse = 
        // let user = await fetchedUsers[i]['user' + (i+1)];
        // let id = user.id;
        // let name = user.name;
        // let image = user.image;
        
        // console.log(fetchedUsers[i]);
        // console.log(id);
        // console.log(name);
        // console.log(image);
        // console.log("***");

        userArray.push(fetchedUsers[i]);
      }
      setUsers(userArray);
  }

  const testUsers = () => {
    setTest("wait for it...")
    setTimeout(() => [setTest(users.length), console.log(users)], 1000);
  }

  return (
    <div>
    <div>{test}</div>
      <button onClick= {getUsersData}>ConsoleTest + setState</button>
      <button onClick= {testUsers}>testUsersState</button>
      <Card id={1} name="test" image="test"/>
    </div>
  );
}

export default App;