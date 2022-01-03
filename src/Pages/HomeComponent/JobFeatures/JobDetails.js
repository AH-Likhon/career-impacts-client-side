import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import img from '../../../images/porsche-100x100.png'
import Footer from '../Footer/Footer';
import BannerNavigation from '../Navigation/BannerNavigation';
import HeaderNavigation from '../Navigation/HeaderNavigation';

const JobDetails = () => {
    // const {jobId}=useParams();
    // const [jobDetails, setJobDetails]=useState({});

    // useEffect(()=>{
    //     fetch(`${jobId}`)
    //     .then(res=> res.json())
    //     .then(data=> setJobDetails(data))
    // },[])

    return (
        <div className='mb-4'>
            <HeaderNavigation></HeaderNavigation>
            <div className='details-banner'>
                <BannerNavigation></BannerNavigation>
                <div className='text-light container mt-5 '>
                    <h1 className='fw-bold'>Financial Systems Solutions Developer</h1>
                    <h5 className='fw-bold'>1/03/22 / 2:00Pm</h5>
                </div>
            </div>
            <div style={{ marginTop: '80px' }}>
                <div className='container'>
                    <div>
                        <img width="20%" className='ms-5 mb-2' src={img} alt="" />
                        <h5 className='fw-bold'>Front End Developer (remotly)</h5>
                        <h6>India , Dilhi, Road-2044 TMS </h6>
                        <small>09:00Am To 06:00Pm</small>
                    </div>
                    <button className='btn px-4 mt-2' style={{ backgroundColor: '#e8be2f' }}>Apply</button>
                    <button className='btn px-4 mt-2 text-light' style={{ backgroundColor: '#e8be2f' }}>Apply</button>
                    <div>
                        <h5 className='fw-bold my-3'>Job Description</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero ratione officiis sed ad ipsam obcaecati similique, maxime eos, necessitatibus eum doloribus inventore tempore nulla ipsum fugit debitis rerum aut quasi facilis exercitationem, et iure quas. Quam voluptatibus harum adipisci quos molestias eius odit corporis maiores architecto sed. Maiores, quidem.</p>

                    </div>
                    <div>
                        <h4>Requierment:</h4>
                        <p>1. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorem tempora saepe! Illum, ea tenetur.</p>
                        <p>3. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorem tempora saepe! Illum, ea tenetur.</p>
                        <p>5. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>6. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorem tempora saepe! Illum, ea tenetur.</p>
                        <p>7. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <p>8. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorem tempora saepe! Illum, ea tenetur.</p>
                        <p>9. Lorem ipsum dolor sit amet consectetur adipisicing.</p>

                    </div>
                    <Link to="/apply"><button style={{ backgroundColor: '#e8be2f' }} className='btn text-light fw-bold'>Apply Now</button></Link>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default JobDetails;