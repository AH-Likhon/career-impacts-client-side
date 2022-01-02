import React from 'react';
import './EmployerFeatures.css'

const EmployerFeatures = () => {
    return (
        <div style={{backgroundColor:'#'}} className='employ-photo '>
      <div className='container'>
      <div style={{paddingTop:'80px'}}  className='text-center '>
             <h3  >Popular Job <span style={{color:'#e8be2f'}}>Categories</span></h3>
             <p>One of our jobs has some kind of flexibility option - such as telecommutinga <br /> part-time schedule or a flexible or flextime schedule</p>
         </div>
         
         <div className=' text-center '>
             <div style={{marginTop:'70px', width:'76%'}} className='row ms-auto  '>
                 <div className='col-12 col-lg-4 col-md-4 text-center mb-4 '>
                  <div className='py-3 employ '>
                      <h1><i className="fas fa-briefcase"></i></h1>
                      <hr />
                      <h6>Md Rajib </h6>
                      <small>1 job AfganSthan</small>
                  </div>
                 </div>
                 <div className='col-12 col-lg-4 col-md-4 text-center mb-4 '>
                  <div  className='py-3 employ'>
                      <h1><i className="fas fa-briefcase"></i></h1>
                      <hr />
                      <h6>MD AH Likhon</h6>
                      <small>1 job AfganSthan</small>
                  </div>
                 </div>
                 <div className='col-12 col-lg-4 col-md-4 text-center mb-4'>
                  <div className='py-3 employ'>
                      <h1><i className="fas fa-briefcase"></i></h1>
                      <hr />
                      <h6>Hasan Arnob</h6>
                      <small>1 job AfganSthan</small>
                  </div>
                 </div>
                 <div className='col-12 col-lg-4 col-md-4 text-center mb-4'>
                  <div className='py-3 employ'>
                      <h1><i className="fas fa-briefcase"></i></h1>
                      <hr />
                      <h6>Md Rokibul Ahad</h6>
                      <small>1 job AfganSthan</small>
                  </div>
                 </div>
                 <div className='col-12 col-lg-4 col-md-4 text-center mb-4'>
                  <div className='py-3 employ'>
                      <h1><i className="fas fa-briefcase"></i></h1>
                      <hr />
                      <h6>Maria Munni</h6>
                      <small>1 job AfganSthan</small>
                  </div>
                 </div>
                 <div className='col-12 col-lg-4 col-md-4 text-center mb-4'>
                  <div className='py-3 employ'>
                      <h1><i className="fas fa-briefcase"></i></h1>
                      <hr />
                      <h6>MD AH Likhon</h6>
                      <small>1 job AfganSthan</small>
                  </div>
                 </div>
                 
             </div>
            
     </div>
      </div>

      {/* ------------ */}
     <div style={{backgroundColor:'#e8be2f', marginTop:'50px'}}>
     <div   className='container'>
     <div className='row p-2 text-light ms-5 '>
                 <div className='col-12 col-lg-6 col-md-6'>
                     <div className=' m-3'>
                         <h5>The highest ranked tech jobs in the US, based on user ratings and reviews on Jobmonster. Discover 12 millions jobs and find great jobs to work.</h5>
                     </div>
                 </div>
                 <div className='col-12 col-lg-2 col-md-2'>
                     <div className=' m-3'>
                         <button className='btn btn-light'>View More</button>
                     </div>
                 </div>
                 <div className='col-12 col-lg-4 col-md-4'>
                     <div className=' m-3'>
                       <h4>Call Now !</h4>
                       <h5>+0883665</h5>
                     </div>
                 </div>
             </div>
     </div>
     </div>
    </div>
    );
};

export default EmployerFeatures;