import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Home() {

    const [data, setData] = useState([]);

    // get data from the server

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://server-gkwx.onrender.com/users');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    // handle delete function
    const handleDelete = (id) => {

        const confirm = window.confirm('Are you sure you want to delete this user?');
        if (confirm) {
            const fetchData = async () => {
                try {
                    await axios.delete('https://server-gkwx.onrender.com/users/' + id);
                    console.log('User deleted successfully');
                    window.location.reload();
                } catch (error) {
                    console.error('Error deleting data:', error);
                }
            };

            fetchData();
        }
    }



    return (
        <div className='d-flex  flex-column justify-content-center align-items-center  vh-250' style={{ background: "linear-gradient(to right,rgb(219, 225, 231), #ffffff)" }}  >
            <h1 className=' mt-5 fw-light' style={{ fontFamily: 'Inter', fontSize: "50px" }} >User Management Dashboard</h1>

            <div className='w-75 mt-4 h-10 rounded-5 bg-white border shadow p-4'>
                <div className='d-flex justify-content-end'>
                    <Link to='/create' className='btn btn-success ms-2 rounded-5 '><i class="material-icons" style={{ position: 'relative', marginRight: '5px', top: '3px' }}>&#xE147;</i> <span style={{ position: 'relative', marginRight: '5px', top: '-3px' }}>Add User</span></Link>
                </div>
                <table className='table table-stripped table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* mapping through the data */}
                        {data.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>
                                    <Link to={`/read/${user.id}`} className=' me-2'><a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons" style={{ color: 'black' }}>&#xE417;</i></a></Link>
                                    <Link to={`/update/${user.id}`} className=' me-2'><a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons" style={{ color: '#1C4E80' }}>&#xE254;</i></a></Link>
                                    <button
                                        onClick={(e) => handleDelete(user.id)}
                                        className="border-0 bg-transparent p-0">
                                        <a href="#" className="delete" title="Delete" data-toggle="tooltip">
                                            <i className="material-icons" style={{ color: '#ed4046' }} >&#xE872;</i>
                                        </a>
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>


        </div>

    )
}




export default Home
