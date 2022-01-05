import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './MakeAdmin.css';
const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleField = (e) => {
    setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user={email};
        fetch('http://localhost:5000/addAdmin',{
         method: "PUT",
         headers:{ "content-type": "application/json"},
         body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> {
            if(data.acknowledged){
                Swal.fire(
                    'Good job!',
                    'Admin create Successfully!'
                )            }
        })
        

    }
    return (
        <div>
           
            <div  className="row user">

            <div className='col-12 col-lg-6'>
            <div style={{ marginTop: '100px' }} className="col-12 col-lg-12 text-center">
                    <h1 className="mb-4">Please Add A Admin </h1>
                    <form onSubmit={handleSubmit} >

                        <div >
                            <input onBlur={handleField} name="email" type="email" style={{ width: '95%' }} className="mb-3 p-2 rounded-pill  field" id="exampleInputEmail1" placeholder="Email" />
                        </div>

                        <button type="submit" style={{ width: '60%', backgroundColor:'#000066' }} className=" p-2   rounded-pill mb-3 text-light">Submit</button>
                        <div>
                        </div>
                    </form>
                </div>

            </div>
          
        </div>
        </div>

    );
};

export default MakeAdmin;