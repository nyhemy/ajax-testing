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
  }

  const testUsers = () => {
    setTest("wait for it...")
    setTimeout(() => [setTest(users.length), console.log(users)], 1000);
  }

  return (
    <div>
      <div>{test}</div>

      <div>
        <button onClick= {getUsersData}>ConsoleTest + setState</button>
        <button onClick= {testUsers}>testUsersState</button>
      </div>
        {/* <Card id={1} name="nameTest1" image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1200px-Test-Logo.svg.png"/>
        <Card id={2} name="nameTest2" image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1200px-Test-Logo.svg.png"/>
        <Card id={3} name="nameTest3" image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1200px-Test-Logo.svg.png"/>
        <Card id={4} name="nameTest4" image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1200px-Test-Logo.svg.png"/>
        <Card id={5} name="nameTest5" image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1200px-Test-Logo.svg.png"/>
        <Card id={6} name="nameTest6" image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/1200px-Test-Logo.svg.png"/> */}
        <div>
          {users.map((user, index) => <Card id={user.id} name={user.name} image={user.image} key={index} />)}
        </div>
    </div>
  );
}

export default App;