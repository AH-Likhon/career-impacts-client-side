import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BannerNavigation from '../HomeComponent/Navigation/BannerNavigation';
import HeaderNavigation from '../HomeComponent/Navigation/HeaderNavigation';
import './Resume.css';
import user from '../../images/user1-100x100.jpg'

const Resume = () => {
    // const [allResume, setAllResume]= useState([]);
   
    // useEffect(()=>{
    //     fetch('')
    //     .then(res=> res.json())
    //     .then(data=>setAllResume(data))
    //    

    // },[])

    // if(loading){
    //     return(
    //         <div class="d-flex justify-content-center mt-4">
    //         <div class="spinner-border" role="status">
    //           <span class="visually-hidden">Loading...</span>
    //         </div>
    //       </div>
    //     )
    // }
    return (
        <div>
        <HeaderNavigation></HeaderNavigation>
        <div className='resume-banner'>
            <BannerNavigation></BannerNavigation>
            <div className='text-center mt-5'>
                <input style={{ width: '40%' }} className='p-2 me-2' type="text" placeholder='Text' />
                <button style={{ backgroundColor: '#e8be2f' }} className='btn p-2 text-light'> Search</button>
            </div >

        </div>
        <div className='container'>
            <div style={{ marginTop: '30px' }} className=' row ms-3'>
                <h3 className='m-3'><span style={{ color: '#e8be2f' }}>All</span>Jobs</h3>
                <div className='col-12 col-lg-6 col-md-6'>
                    <div className='job-features row p-1 m-1'>
                        <div className=' col-12 col-lg-3 col-md-3' style={{ borderRadius: '100%' }}>
                            <img width="70%" height="110px" src={user} alt="" />
                        </div>

                        <div className=' col-12 col-lg-5 col-md-5'>
                            <h6 className='fw-bold'>user Name</h6>
                            <small>User gmail </small> <br />
                            <small>User resume link</small>
                        </div>

                        <div className=' mt-2 col-12 col-lg-3 col-md-3'>
                            <Link to="/select">
                                <button style={{ backgroundColor: '#e8be2f' }} className='btn text-light'> Select</button>
                            </Link>
                        </div>

                    </div>
                </div>

                <div className='col-12 col-lg-6 col-md-6'>
                    <div className='job-features row p-1 m-1'>
                        <div className=' col-12 col-lg-3 col-md-3' style={{ borderRadius: '100%' }}>
                            <img width="70%" height="110px" src={user} alt="" />
                        </div>

                        <div className=' col-12 col-lg-5 col-md-5'>
                            <h6 className='fw-bold'>user Name</h6>
                            <small>User Gamil </small> <br />
                            <small>User resume link</small>
                        </div>

                        <div className=' mt-2 col-12 col-lg-3 col-md-3'>
                            <Link to="/select">
                                <button style={{ backgroundColor: '#e8be2f' }} className='btn text-light'>Select</button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    );
};

export default Resume;