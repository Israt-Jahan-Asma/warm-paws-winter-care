import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn } = use(AuthContext)
    const handleLogin= (e)=>{
        e.preventDefault()
        const form = e.target
        const email= form.email.value
        const password = form.password.value
        console.log(email, password);
        signIn(email, password)
        .then(result=>{
            const user = result.user
            console.log(user);
            toast.success('You have login successfully!')
            
        })
        .catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorCode, errorMessage)
        })
    }
    return (
        <div className='flex justify-center max-h-screen items-center py-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10'>
            <div className="card-body space-y-5">
                <h2 className='text-2xl font-bold text-primary text-center'>Login Your Account</h2>
            <form className='w-80 mx-auto' onSubmit={handleLogin}>
                
                <fieldset className="fieldset">

                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>

                    <input name='password' type="password" className="input" placeholder="Password" />
                    <p className='font-semibold pt-5'>Don't Have an Account? <Link className='text-secondary' to='/register'> Register</Link></p>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </form>
            </div>
        </div>
    );
};

export default Login;