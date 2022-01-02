import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import company from '../../../images/porsche-100x100.png';
import './JobFeatures.css';

const JobFeatures = () => {
    
    return (
        <div className='container'>
            <div style={{marginTop:'80px'}} className='row ms-3'>
            <h3><span style={{color: '#e8be2f'}}>Recent</span>Jobs</h3>
                <div className='col-12 col-lg-8 col-md-8 mb-4 '>
                    <div className='d-flex mt-4 job-features p-4'>
                        <div  style={{borderRadius:'100%', backgroundColor:'#ddd'}}>
                            <img width="80px" height="80px" src={company} alt="" />
                        </div>
                        <div className='ms-4 '>
                        <h5 className='fw-bold'>Front End Developer (remotly)</h5>
                        <h6>India , Dilhi, Road-2044 TMS </h6>
                        <small>09:00Am To 06:00Pm</small>
                        </div>
                        <div className='ms-5 mt-2'>
                            <Link to="jobDetails">
                            <button style={{backgroundColor:'#e8be2f'}} className='btn'>See Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            
                <div className='col-12 col-lg-4 col-md-4'>
                    
                        <Outlet></Outlet>
                
                </div>
            </div>
        </div>
    );
};

export default JobFeatures;