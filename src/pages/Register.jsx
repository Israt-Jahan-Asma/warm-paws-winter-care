import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
const Register = () => {
    const {createUser, setUser}= use(AuthContext)
    const handleRegister=(e)=>{
        e.preventDefault()
       
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        
        createUser(email, password)
        .then(result=>{
            const user =result.user
            setUser(user);
            toast.success('Registration successfully done.')
            
        })
        .catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorCode, errorMessage)
        })
        
        
        
    }
    return(
        <div className='flex justify-center max-h-screen items-center py-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10'>
            <div className="card-body space-y-5">
                <h2 className='text-2xl font-bold text-primary text-center'>Register Your Account</h2>
                <form className='w-80 mx-auto' onSubmit={handleRegister}>

                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" required placeholder="Name" />

                        {/* photo url */}

                        <label className="label">Photo-URL</label>
                        <input name='photo' type="text" className="input" required placeholder="Photo-URL" />

                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" required placeholder="Email" />

                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />

                        <p className='font-semibold pt-5'>Already Have an Account? <Link className='text-secondary' to='/login'> Login</Link></p>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;