import React from 'react';
import { Link } from 'react-router-dom';
import company from '../../../../images/porsche-100x100.png';

const AdminAllJobs = () => {
    return (
        <div className='container'>
            <div className=' row'>
                <h3><span style={{ color: '#e8be2f' }}>All</span>Jobs</h3>
                <div className='col-12 '>
                    <div className='job-features row p-3'>
                        <div className=' col-12 col-lg-3 col-md-3' style={{ borderRadius: '100%' }}>
                            <img width="70%" height="110px" src={company} alt="" />
                        </div>

                        <div className=' col-12 col-lg-5 col-md-5'>
                            <h5 className='fw-bold'>Front End Developer (remotly)</h5>
                            <h6>India , Dilhi, Road-2044 TMS </h6>
                            <small>09:00Am To 06:00Pm</small>
                        </div>

                        <div className=' mt-2 col-12 col-lg-3 col-md-3'>
                            <Link to="jobDetails">
                                <button style={{ backgroundColor: '#e8be2f' }} className='btn'>See Details</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminAllJobs;