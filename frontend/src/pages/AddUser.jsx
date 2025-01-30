import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

let c=11;

// adding a new user to the database

function AddUser() {
const [values, setValues] = React.useState({
  id: c++,
    name: '',
    email: '',
    phone: ''
  });


  const navigate =useNavigate();

// adding a new user to the database

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        await axios.post('https://server-gkwx.onrender.com/users', values);
     
        navigate('/');

      } catch (error) {
        console.error('Error posting data:', error);
      }
    };

    fetchData();

  }


  return (
    
    <div className='d-flex mt-2 w-100 vh-100 justify-content-center align-items-center bg-light '>
      <div className='w-50 border bg-white px-5 pt-3 pb-5 rounded-5 '> 
        <h1>Add User</h1>

        {/* form to add a new user */}
        
        <form onSubmit={handleSubmit} >
          <div className='mb-3'>
            <label htmlFor='name' className='form-label fw-bold'>Name</label>
            <input type='text' className='form-control' name='name' placeholder='Enter Name' 
            onChange={e => setValues({...values, name: e.target.value})}  />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label fw-bold'>Email</label>
            <input type='email' className='form-control' name='email' placeholder='Enter Email' 
                onChange={e => setValues({...values, email: e.target.value})}   />
          </div>
          <div className='mb-3'>
            <label htmlFor='phone' className='form-label fw-bold'>Phone</label>
            <input type='text' className='form-control' name='phone' placeholder='Enter Phone number'
                onChange={e => setValues({...values, phone: e.target.value})}  />
          </div>
          <button type='submit' className='btn rounded-4 w-25 btn-success'>Submit</button>
          <Link to='/' className='btn rounded-4 w-25 btn-secondary ms-2'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default AddUser
