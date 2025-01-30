import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


function ReadUser() {

  const [data, setData] = useState([]);
 
  // using params to get the id of the user
  const { id } = useParams();

  // getting the data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/users/' + id);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white px-5 pt-3 pb-5 rounded-5'>
        <h3 className='mb-3'>User Details</h3>
        <div className='mb-2'>
          <strong>Name: </strong> {data.name}
        </div>
        <div className='mb-2'>
          <strong>Email:</strong>  {data.email}
        </div>
        <div className='mb-4'>
          <strong>Phone: </strong> {data.phone}
        </div>
        <Link to={`/update/${id}`} className='btn rounded-4 w-25 btn-success'>Edit</Link>
        <Link to={"/"} className='btn btn-secondary rounded-4 w-25  ms-3'>Back</Link>


      </div>





    </div>
  )
}

export default ReadUser