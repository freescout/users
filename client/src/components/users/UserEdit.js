import React, { useState, useEffect } from "react";
import serverApi from '../../api';

function UserEdit(props) {

  const initialState = { firstName: '', lastName: '', city: '' }
  const [user, setUser] = useState(initialState)

  useEffect(function() {
    async function getUser() {
      try {
        const response = await serverApi.get(`/users/${props.match.params._id}`);
        console.log("reponse", response)
        setUser(response.data);
      } catch(error) {
        console.log(error);
      }
    }
    getUser();
  }, [props]);

  function handleSubmit(event) {
    console.log("user", user)
    event.preventDefault();
    async function updateUser() {
      try {
        await serverApi.patch(`/users/${user._id}`, user);
        props.history.push(`/users/${user._id}`);
      } catch(error) {
        console.log(error);
      }
    }
    updateUser();
  }

  function handleChange(event) {
    setUser({...user, [event.target.name]: event.target.value})
  }

  function handleCancel() {
    props.history.push(`/users/${user._id}`);
  }

  return (
    <div>
      <h1>Edit {user.firstName} {user.lastName} </h1>
      <hr/>
      <form onSubmit={handleSubmit}>
        <div class="row">
          <div className="form-group col-md-6">
            <label>First Name</label>
            <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input type="text" name="lastName" value={user.lastName} onChange={handleChange} className="form-control" />
          </div>
        </div>
        <div class="row">
          <div className="form-group  col-md-6">
            <label>City</label>
            <input type="text" name="city" value={user.city} onChange={handleChange} className="form-control" />
          </div>
          <div className="form-group  col-md-6">
            <label>Country</label>
            <input type="text" name="country" value={user.country} onChange={handleChange} className="form-control" />
          </div>
        </div>
        <div className="btn-group">
          <button type="submit" className="btn btn-primary">Update</button>
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UserEdit;