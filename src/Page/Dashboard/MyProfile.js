import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyProfile = () => {

    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://radiant-reaches-54405.herokuapp.com/booking?client=${user.email}`,{
              method: 'GET',
              headers:{
                'authorization': `bearer ${localStorage.getItem('accessToken')}`
              }
            })
                .then(res => {
                  console.log('res', res);
                  if(res.status === 401 || res.status===403){
                    signOut(auth);
        localStorage.removeItem('accessToken');
                           navigate('/');
                  }
                 return res.json()
                })
                .then(data => {
                  setAppointments(data);
                });
        }
    }, [user])


    return (
        <div>
            <h2>My profile :{appointments.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product Name</th>
        <th>email</th>
      </tr>
    </thead>
    <tbody>
      {
          appointments.map((a, index) => <tr>
            <th>{index +1}</th>
            <td>{a.clientName}</td>
            <td>{a. product}</td>
            <td>{a. client}</td>
            
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProfile;