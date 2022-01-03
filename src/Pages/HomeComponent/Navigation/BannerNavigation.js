import React from 'react';
import { Link } from 'react-router-dom';

const BannerNavigation = () => {
    return (
        <div>
             <nav className="navbar navbar-expand-lg ">

<div className="container mt-3">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto ms-1 mb-2 mb-lg-0 navigation-banner ">
            <li className="nav-item">
                <h3 style={{ color: 'white' , fontWeight:'bold'}} >Career<span style={{ color: '#e8be2f' }}>Impacts</span></h3>
            </li>
            <li className="nav-item">
                <Link to="/home" className="nav-link active fw-bold ">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/jobs" className="nav-link active fw-bold ">Jobs</Link>
            </li>
            <li className="nav-item">
                <Link to="/companys" className="nav-link active fw-bold ">Companys</Link>
            </li>
            <li className="nav-item">
                <Link to="/resumes" className="nav-link active fw-bold ">Resumes</Link>
            </li>
            <li className="nav-item">
                <Link to="/pages" className="nav-link active fw-bold ">Pages</Link>
            </li>
            
            <form className="d-flex">
            <ul className="navbar-nav me-auto  mb-2 mb-lg-0">

                <div className='d-flex navigation-banner '>
                    <li className="nav-item active ">
                    <Link to="/postJob" className="nav-link active fw-bold "><button style={{backgroundColor:'#e8be2f'}} className='btn text-light'>Post a Job</button></Link>
                    </li>
                   
                    <li className="nav-item active ">
                    <Link to="login" className="nav-link active fw-bold ">Login</Link>
                    </li>
                   
                    <li className="nav-item active ">
                    <Link to="register" className="nav-link active fw-bold ">Register</Link>
                    </li>
                   

                </div>

            </ul>
        </form>
        </ul>
      
    </div>
</div>

</nav>
        </div>
    );
};

export default BannerNavigation;