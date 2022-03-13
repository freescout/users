import React, { useState } from "react";
import serverApi from '../../api'

function UserAdd(props) {
  const initialState = { firstName: '', lastName: '', city: '' }
  const [user, setUser] = useState(initialState)

  function handleChange(event) {
    setUser({...user, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    console.log("reached handle")
    event.preventDefault();
    if(!user.firstName || !user.lastName ) return
    async function postUser() {
      try {
        console.log("user", user)
        const response = await serverApi.post('/users', user);
        props.history.push(`/users/${response.data._id}`);
      } catch(error) {
        console.log('error', error);
      }
    }
    console.log("reached post")
    postUser();
  }

  function handleCancel() {
    props.history.push("/users");
  }

  return (
    <div>
      <h1>Create User</h1>
      <hr/>
      <form onSubmit={handleSubmit}>
      <div class="row">
        <div className="form-group col-md-6">
          <label>First Name*</label>
          <input name="firstName" type="text" value={user.firstName} onChange={handleChange} className="form-control" required/>
        </div>
          <div className="form-group col-md-6">
            <label>Last Name*</label>
            <input name="lastName" type="text" value={user.lastName} onChange={handleChange} className="form-control" required/>
          </div>
        </div>
        <div class="row">
          <div className="form-group col-md-6">
            <label>City*</label>
            <input name="city" type="text" value={user.city} onChange={handleChange} className="form-control" required/>
          </div>
          <div className="form-group col-md-6">
            <label>Country*</label>
            <input name="country" type="text" value={user.country} onChange={handleChange} className="form-control" required/>
          </div>
        </div>
        <div>
          <p>* fields are mandatory</p>
        </div>
        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UserAdd;