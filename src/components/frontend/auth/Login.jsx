import React from 'react'
import Navbar from '../../../layouts/frontend/Navbar'

export default function Login() {
    return (
        <div>
            <Navbar/>
            <div className="w-100 h-100 container  d-flex flex-column align-items-center">
                <div className="card my-5 w-50 bg-dark">
                    <div className="card-header text-light">
                        <h4>Login</h4>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="text-light">Email</label>
                                <input type="text" name="email" className="form-control" id="email" placeholder="Type Your Email" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password" className="text-light">Password</label>
                                <input type="password" name="password" className="form-control" id="password" placeholder="Type Your Password"/>
                            </div>
                            <div className="form-group mb-3">
                               <button className="btn btn-light">Log in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
