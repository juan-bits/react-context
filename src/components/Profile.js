import React, {useContext} from 'react'
import UserContext from '../context/User/UserContext';

function Profile() {
  const {selectedUser} = useContext(UserContext);
  return (
    <>
      {selectedUser ? (<div className='card card-body text-center'>
        <img src={selectedUser.avatar} alt={selectedUser.first_name} className="card-img-top rounded-circle m-auto img-fluid"/>
        <h1>{selectedUser.first_name} {selectedUser.last_name}</h1>
        <p>email: {selectedUser.email}</p>
      </div>) : (<h1>No User Selected</h1>)}
    </>
  )
}

export default Profile