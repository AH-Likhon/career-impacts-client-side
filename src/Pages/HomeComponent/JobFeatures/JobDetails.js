import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../images/porsche-100x100.png'

const JobDetails = () => {
    return (
        <div className='mb-4'>
            <div>
                <div>
                    <img className='ms-5 mb-2' src={img} alt="" />
                    <h5 className='fw-bold'>Front End Developer (remotly)</h5>
                    <h6>India , Dilhi, Road-2044 TMS </h6>
                    <small>09:00Am To 06:00Pm</small>
                </div>
                <button className='btn px-4 mt-2' style={{backgroundColor:'#e8be2f'}}>Apply</button>
                <div>
                    <h5 className='fw-bold my-3'>Job Description</h5 >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero ratione officiis sed ad ipsam obcaecati similique, maxime eos, necessitatibus eum doloribus inventore tempore nulla ipsum fugit debitis rerum aut quasi facilis exercitationem, et iure quas. Quam voluptatibus harum adipisci quos molestias eius odit corporis maiores architecto sed. Maiores, quidem.</p>

                </div>
                {/* <div>
                    <h4>Requierment:</h4>
                    <p>1. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorem tempora saepe! Illum, ea tenetur.</p>
                    <p>3. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <p>4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse dolorem tempora saepe! Illum, ea tenetur.</p>
                    <p>5. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                   
                </div> */}
                <Link to="jobDeatils">See More...</Link>
               
            </div>
        </div>
    );
};

export default JobDetails;