import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

// updating the user details

function EditUser() {
  
  const {id} =useParams();
  const [values, setValues] = React.useState({
    
      name: '',
      email: '',
      phone: ''
    });

    const navigate =useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get('https://server-gkwx.onrender.com/users/'+id);
              setValues(response.data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData();
    }, []);



    // handle update function to update the user details in the database 

    const handleUpdate = async (event) => {
      event.preventDefault();
      const fetchData = async () => {
        try {
          await axios.put('https://server-gkwx.onrender.com/users/'+id, values);
       
          navigate('/');
  
        } catch (error) {
          console.error('Error posting data:', error);
        }
      };
  
      fetchData();
  
    }


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white px-5 pt-3 pb-5 rounded-5'>
        <h1>Edit User Details</h1>
        <form onSubmit={handleUpdate} >
          <div className='mb-3'>
            <label htmlFor='name' className='form-label fw-bold'>Name</label>
            <input type='text' className='form-control' name='name' placeholder='Enter Name' 
            value={values.name}    onChange={e => setValues({...values, name: e.target.value})}/>

          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label fw-bold'>Email</label>
            <input type='email' className='form-control' name='email' placeholder='Enter Email'
            value={values.email}    onChange={e => setValues({...values, email: e.target.value})} />
          </div>
          <div className='mb-3'>
            <label htmlFor='phone' className='form-label fw-bold'>Phone</label>
            <input type='text' className='form-control' name='phone' placeholder='Enter Phone number'
            value={values.phone}    onChange={e => setValues({...values, phone: e.target.value})} />
          </div>
          <button type='submit' className='btn rounded-4 w-25 btn-success'>Update</button>
          <Link to='/' className='btn rounded-4 w-25 btn-secondary ms-2'>Back</Link>
        </form>

      </div>

    </div>
  )
}

export default EditUser
