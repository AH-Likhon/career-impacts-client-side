import React from 'react';
import { Link } from 'react-router-dom';

const AdminSingleJob = ({ job }) => {
    return (
        <div className='col-12 '>
            <div className='job-features row p-3'>
                <div className=' col-12 col-lg-3 col-md-3' style={{ borderRadius: '100%' }}>
                    <img width="70%" height="110px" src={job.img} alt="" />
                </div>

                <div className=' col-12 col-lg-5 col-md-5'>
                    <h5 className='fw-bold'>{job.title}</h5>
                    <h6>{job.category} </h6>
                    <h6>{job.country} </h6>
                    <small>{job.published}</small>
                    <small>{job.deadline}</small>
                </div>

                <div className=' mt-2 col-12 col-lg-3 col-md-3'>
                    <Link to="jobDetails">
                        <button style={{ backgroundColor: '#e8be2f' }} className='btn'>See Details</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AdminSingleJob;