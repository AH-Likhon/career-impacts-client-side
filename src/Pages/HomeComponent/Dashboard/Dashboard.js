import React from 'react';
import { Link } from 'react-router-dom';
import UpdateJob from '../../UpdateJob/UpdateJob';
import AdminAllJobs from './AdminAllJobs/AdminAllJobs';
import AdminHeader from './AdminHeader/AdminHeader';
import AdminPostJob from './AdminPostJob/AdminPostJob';

const Dashboard = () => {
    return (
        <>
            <AdminHeader />
            <div></div>
            <div className="my-5 d-flex align-items-start">

                <div style={{ height: '100vh', backgroundColor: '#e8be2f' }} className="text-light w-25 p-5 nav flex-column nav-pills col-md-4" id="v-pills-tab" role="tablist" aria-orientation="vertical">

                    <button className="nav-link bg-transparent text-dark fw-bold w-50 active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-jobs" type="button" role="tab" aria-controls="v-pills-jobs" aria-selected="true">All Jobs</button>

                    <button className="nav-link bg-transparent text-dark fw-bold w-50" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-postJob" type="button" role="tab" aria-controls="v-pills-postJob" aria-selected="true">Post A Job</button>

                    <button className="nav-link bg-transparent text-dark fw-bold w-50" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Update Job</button>


                </div>

                <div style={{ height: '100vh' }} className="tab-content w-75 p-2 col-md-8" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-jobs" role="tabpanel" aria-labelledby="v-pills-jobs-tab">
                        <AdminAllJobs />
                    </div>

                    <div class="tab-pane fade show" id="v-pills-postJob" role="tabpanel" aria-labelledby="v-pills-postJob-tab">
                        <AdminPostJob></AdminPostJob>
                    </div>

                    <div class="tab-pane fade show" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <UpdateJob></UpdateJob>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;