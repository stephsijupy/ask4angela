import React, {useState, useEffect} from 'react'
import '../App.css'
import AddUser from '../components/AddUser'
import Header from '../components/Header'
import UserList from '../components/UserList'
import { v4 as uuidv4 } from "uuid";

function UserSignIn() {
  const LOCAL_STORAGE_KEY = "users";
  const [users, setUsers] = useState([]);
  
  const addUserHandler = (user) => {
    console.log(user);
    setUsers([...users, { id: uuidv4(), ...user }]);
  };

  const removeUserHandler = (id) => {
    const newUserList = users.filter((user) => {
      return user.id !== id;
    });

    setUsers(newUserList);
  };

  useEffect(() => {
    const retriveUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveUsers) setUsers(retriveUsers);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
  }, [users]);

  return (
    <div className='ui container'>
      <Header />
      <AddUser addUserHandler={addUserHandler} />
      <UserList users={users} getUserId={removeUserHandler}/>
    </div>
  )
}

export default UserSignIn;
