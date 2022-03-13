import React, { useState, useEffect } from "react";
import serverApi from '../../api';
import { Link } from 'react-router-dom';

function UserInfo(props) {
  const [user, setUser] = useState({});

  useEffect(function() {
    async function getUser() {
      try {
        const response = await serverApi.get(`/users/${props.match.params._id}`);
        console.log("response at userInfo", response.data)
        setUser(response.data);
      } catch(error) {
        console.log('error', error);
      }
    }
    getUser();
  }, [props]);

  async function handleDelete() {
    try {
      await serverApi.delete(`/users/${props.match.params._id}`);
      props.history.push("/users");
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>{user.firstName} {user.lastName}</h2>
      <p>{user.city}, {user.country}</p>
      <p/>
      <div className="btn-group">
        <Link to={`/users/${user._id}/edit`} className="btn btn-primary">Edit</Link>
        <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        <Link to="/users" className="btn btn-secondary">Close</Link>
      </div>
      <hr/>
    </div>
  );
};

export default UserInfo;