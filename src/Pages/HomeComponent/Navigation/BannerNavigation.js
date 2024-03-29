import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const BannerNavigation = () => {
    const { user, logOut } = useAuth();

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
                                <h3 style={{ color: 'white', fontWeight: 'bold' }} >Career<span style={{ color: '#e8be2f' }}>Impacts</span></h3>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link active fw-bold text-light ">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/jobs" className="nav-link active fw-bold text-light">Jobs</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/resumes" className="nav-link active fw-bold text-light">Resumes</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/company" className="nav-link active fw-bold text-light">Company</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/team" className="nav-link active fw-bold text-light">Team</Link>
                            </li>




                            <form className="d-flex">
                                <ul className="navbar-nav me-auto  mb-2 mb-lg-0">

                                    {
                                        user?.email ? <div className='d-flex navigation-banner '>

                                            <li className="nav-item active ">
                                                <Link to="/dashboard" className="nav-link text-light active fw-bold ">Dashboard</Link>
                                            </li>



                                            <li className="nav-item text-light ">
                                                <button className='nav-link btn text-light fw-bold'>{user?.displayName}</button>
                                            </li>
                                            <li className="nav-item">
                                                <button style={{ backgroundColor: '#e8be2f' }} onClick={logOut} className="nav-link btn ms-3 text-light fw-bold ">Logout</button>
                                            </li>

                                        </div>
                                            :
                                            <div className='d-flex navigation-banner '>

                                                <li className="nav-item">
                                                    <Link to="/login" className="nav-link text-light fw-bold ">Login</Link>
                                                </li>

                                                <li className="nav-item active ">
                                                    <Link to="/register" className="nav-link text-light fw-bold ">Register</Link>
                                                </li>
                                            </div>
                                    }

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