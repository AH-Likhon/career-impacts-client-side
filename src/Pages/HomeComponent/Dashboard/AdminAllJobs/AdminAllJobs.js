import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminSingleJob from '../AdminSingleJob/AdminSingleJob';

const AdminAllJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/jobs`;
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    console.log(jobs)

    return (
        <div className='container'>
            <div className=' row'>
                <h3><span className='text-warning fw-bold'>Jobs</span>Found: {jobs.length}</h3>
                {
                    jobs.map(job => <div className='col-12 px-3 py-2' key={job._id}>
                        <div className='row p-3 border rounded' style={{ backgroundColor: '#dad8d8' }}>
                            <div className=' col-12 col-lg-3 col-md-3' style={{ borderRadius: '100%' }}>
                                <img width="70%" height="110px" src={job.img} alt="" />
                            </div>

                            <div className=' col-12 col-lg-5 col-md-5'>
                                <h5 className='fw-bold'>{job.title}</h5>
                                <h6>{job.category} </h6>
                                <h6>{job.country} </h6>
                                <small>{job.published}</small>
                                <small className='mx-2'>{job.deadline}</small>
                            </div>

                            <div className=' mt-2 col-12 col-lg-3 col-md-3'>
                                <Link to="jobDetails">
                                    <button style={{ backgroundColor: '#e8be2f' }} className='btn'>See Details</button>
                                </Link>
                            </div>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AdminAllJobs;