import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminAllJobs from './AdminAllJobs/AdminAllJobs';
import AdminHeader from './AdminHeader/AdminHeader';
import AdminPostJob from './AdminPostJob/AdminPostJob';
import AppliedJobs from './AppliedJobs/AppliedJobs';

const Dashboard = () => {
    const { user, logOut } = useAuth();

    const [singleUser, setSingleUser] = useState([]);
    // console.log(user.email)

    useEffect(() => {
        const url = `http://localhost:5000/users/${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleUser(data))
    }, [user.email]);

    // console.log(singleUser.user_type);


    return (
        <>
            <AdminHeader />

            <div className="my-5 d-flex align-items-start">

                <div style={{ height: '100vh', backgroundColor: '#e8be2f' }} className="text-light border-0 rounded-3 w-25 p-5 nav flex-column nav-pills col-md-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                    <button type="button"
                        className="nav-link text-light bg-dark fw-bold w-75 active" id="v-pills-dashboard-tab" data-bs-toggle="pill" data-bs-target="#v-pills-dashboard" role="tab" aria-controls="v-pills-dashboard" aria-selected="true"
                    >Dashboard</button>

                    {
                        singleUser.user_type === 'CEO' ? <>
                            <button className="nav-link bg-transparent text-dark fw-bold w-75 " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-jobs" type="button" role="tab" aria-controls="v-pills-jobs" aria-selected="true">Manage Jobs</button>

                            <button className="nav-link bg-transparent text-dark fw-bold w-75" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-postJob" type="button" role="tab" aria-controls="v-pills-postJob" aria-selected="true">Post A Job</button>
                        </>
                            :
                            <button className="nav-link bg-transparent text-dark fw-bold w-75" id="v-pills-appliedJobs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-appliedJobs" type="button" role="tab" aria-controls="v-pills-appliedJobs" aria-selected="true">Applied Jobs </button>

                    }


                    <button type="button" onClick={logOut}
                        className="text-danger btn bg-transparent fw-bold w-75"
                    >LogOut</button>
                </div>

                <div style={{ height: '100vh' }} className="tab-content w-75 p-2 col-md-8" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashbaord-tab">
                        <h3 className='text-center'>Welocme to {user?.displayName} dashboard</h3>
                    </div>

                    <div class="tab-pane fade show " id="v-pills-jobs" role="tabpanel" aria-labelledby="v-pills-jobs-tab">
                        <AdminAllJobs />
                    </div>

                    <div class="tab-pane fade show" id="v-pills-postJob" role="tabpanel" aria-labelledby="v-pills-postJob-tab">
                        <AdminPostJob></AdminPostJob>
                    </div>

                    <div class="tab-pane fade show" id="v-pills-appliedJobs" role="tabpanel" aria-labelledby="v-pills-appliedJobs-tab">
                        <AppliedJobs></AppliedJobs>
                    </div>


                </div>
            </div>

        </>
    );
};

export default Dashboard;