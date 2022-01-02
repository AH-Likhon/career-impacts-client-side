import React from 'react';
import Banner from '../Banner/Banner';
import EmployerFeatures from '../EmployerFeatures/EmployerFeatures';
import JobCategories from '../JobCategories/JobCategories';
import JobFeatures from '../JobFeatures/JobFeatures';
import MemberShip from '../MemberShip/MemberShip';
import HeaderNavigation from '../Navigation/HeaderNavigation';

const Home = () => {
    return (
        <div>
   <HeaderNavigation></HeaderNavigation>
   <Banner></Banner>
   <JobCategories></JobCategories>
   <JobFeatures></JobFeatures>
   <EmployerFeatures></EmployerFeatures>
   <MemberShip></MemberShip>
        </div>
    );
};

export default Home;