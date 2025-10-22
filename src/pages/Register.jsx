import React from 'react';
import { Link } from 'react-router';
const Register = () => {
    return(
        <div className='flex justify-center max-h-screen items-center py-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10'>
            <div className="card-body space-y-5">
                <h2 className='text-2xl font-bold text-primary text-center'>Register Your Account</h2>
                <form className='w-80 mx-auto' onSubmit={''}>

                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />

                        {/* photo url */}

                        <label className="label">Photo-URL</label>
                        <input type="text" className="input" placeholder="Photo-URL" />

                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />

                        <p>Already Have an Account? <Link to='/login'> Login</Link></p>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;