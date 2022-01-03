import React, { useEffect, useState } from 'react';
import UpdateJob from '../../../UpdateJob/UpdateJob';

const AdminAllJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/jobs`;
        fetch(url)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/jobs/${id}`, {
                method: "DELETE",
                headers: { "content-type": "application/json" },
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Succesfully Deleted');
                        const remaining = jobs.filter(job => job._id !== id);
                        setJobs(remaining);
                    }
                });
        }
        // console.log(id);
    };

    return (
        <>

            <div className='container'>
                <div className=' row'>
                    <h3><span className='text-warning fw-bold'>Jobs</span>Found: {jobs.length}</h3>
                    {
                        jobs.map(job => <div className='col-12 px-3 py-2' key={job._id}>
                            <div className='row p-3 border rounded' style={{ backgroundColor: '#dad8d8' }}>
                                <div className=' col-12 col-lg-3 col-md-3' style={{ borderRadius: '100%' }}>
                                    <img width="70%" height="110px" src={job.img} alt="" />
                                </div>

                                <div className=' col-12 col-lg-6 col-md-6'>
                                    <h5 className='fw-bold'>{job.title}</h5>
                                    <h6>{job.category} </h6>
                                    <h6>{job.country} </h6>
                                    <small>{job.published}</small>
                                    <small className='mx-2'>{job.deadline}</small>
                                </div>

                                <div className=' mt-2 col-12 col-lg-6 col-md-6'>
                                    <button type="button"
                                        style={{ backgroundColor: '#e8be2f' }}
                                        className="btn"
                                        data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Update This Job</button>

                                    <button type="button"
                                        style={{ backgroundColor: '#e8be2f' }}
                                        className="btn"
                                        onClick={() => handleDelete(job._id)}
                                    >Delete</button>
                                </div>

                            </div>
                        </div>)
                    }

                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Update This Job Information</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <UpdateJob />
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AdminAllJobs;