import React, {useState, useEffect} from 'react'
import '../App.css'
import AddUser from '../components/AddUser'
import Header from '../components/Header'
import UserList from '../components/UserList'
import { v4 as uuidv4 } from "uuid";
import {useNavigate} from 'react-router-dom'

function UserSignIn() {
  const LOCAL_STORAGE_KEY = "users";
  const [users, setUsers] = useState([]);
  var secretWord = "Beautiful";
  
  const addUserHandler = (user) => {
    console.log(user);
    secretWord = user.secretWord;
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

  let navigate = useNavigate();
  return (
    <div className='ui container'>
      <Header />
      <AddUser addUserHandler={addUserHandler} />
      <UserList users={users} getUserId={removeUserHandler}/>
      <button className="ui button pink" onClick={() => navigate(`/word-generator/${secretWord}`)}>Get Code</button>
    </div>
  )
}

export default UserSignIn;
