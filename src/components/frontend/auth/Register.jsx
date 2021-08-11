import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../../../layouts/frontend/Navbar';

export default function Register() {

    const [registerinput, setregisterinput] = useState({
        name:'',
        email:'',
        password:'',

    })

    const handelInput = (e)=>{
        e.presist();
        setregisterinput({...registerinput,[e.target.name]:e.target.value });
    }
    const registerSubmit = (e)=>{
        e.preventDefault();
        const data = {
            name:registerinput.name,
            email:registerinput.email,
            password:registerinput.password,
        }
        
        axios.post(`/api/register`, data).then(res => {})
    } 
    return (
        <div>
            <Navbar/>
            <div className="w-100 h-100 container  d-flex flex-column align-items-center">
                <div className="card my-5 w-50 bg-dark">
                    <div className="card-header text-light">
                        <h4>Register</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={registerSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="name" className="text-light">Name</label>
                                <input type="text" name="email" className="form-control" id="name" placeholder="Type Your Name" onChange={handelInput} value={registerinput.name} />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="text-light">Email</label>
                                <input type="text" name="email" className="form-control" id="email" placeholder="Type Your Email" onChange={handelInput} value={registerinput.email}/>
                            </div>
                           
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="text-light">Password</label>
                                <input type="password" name="password" className="form-control" id="password" placeholder="Type Your Password" onChange={handelInput} value={registerinput.password}/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="confirm_password" className="text-light">Confirm Password</label>
                                <input type="password" name="confirm_password" className="form-control" id="confirm_password" placeholder="Retype Your Password" onChange={handelInput} value={registerinput.confirm}/>
                            </div>
                            <div className="form-group mb-3">
                               <button type="submit" className="btn btn-light">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
