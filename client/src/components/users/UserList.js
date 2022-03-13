import React, { useState, useEffect } from 'react';
import serverApi from '../../api';
import { Link } from 'react-router-dom';

function UserList() {
  const [users, setUsers] = useState([])

  useEffect(function() {
    async function getUsers() {
      try {
        const response = await serverApi.get("/users");
        console.log(response.data)
        setUsers(response.data);
      } catch(error) {
        console.log('error', error);
      }
    }
    getUsers();
  }, []);

  return (
    <div>
      <h2>
        <Link to="/users/new" className="btn btn-primary float-right">Create New User</Link>
      </h2>
      <hr/>
      {users.map((user) => {
        return(
          <div key={user._id}>
            <h4><Link to={`/users/${user._id}`}>{user.firstName} {user.lastName}</Link></h4>
            <small>{user.city}, {user.country} </small>
            <hr/>
          </div>
        )
      })}
    </div>
  )
}

export default UserList;