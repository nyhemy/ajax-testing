import React, { useState } from 'react';
import styles from './App.module.css';

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
    console.log(users);
      const response = await fetch('https://5fa06868e21bab0016dfd1c6.mockapi.io/UsersRequest');
      const fetchedUsers = await response.json();
      const userArray = [];
      for (let i = 0; i < fetchedUsers.length; i++) {

        // let userResponse = 
        let user = fetchedUsers[i]['user' + (i+1)];
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
      console.log(userArray);
      setUsers(userArray);
      console.log(users);
      console.log("***");
  }

  const testUsers = () => {
    setTest(users.length);
  }

  return (
    <div>
    <div>{test}</div>
      <button onClick= {getUsersData}>JSONConsoleTest</button>
      <button onClick= {testUsers}>testUsersState</button>
    </div>
  );
}

export default App;