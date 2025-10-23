import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
const Register = () => {
    const [passwordError, setPasswordError] = useState('');
    const {createUser, setUser, updateUser}= use(AuthContext)

    const navigate = useNavigate()
    const handleRegister=(e)=>{
        e.preventDefault()
       
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        
        // pass validation 
        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one uppercase letter.');
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error('Password must contain at least one lowercase letter.');
            return;
        }

        createUser(email, password)
        .then(result=>{
            const user =result.user
            updateUser({ displayName: name, photoURL: photo})
            .then(()=>{
                setUser({ 
                    ...user, displayName: name, photoURL: photo 

                });
                toast.success('Registration successfully done.')
                navigate('/')
                form.reset()
                
            }).catch((error) => {
                setUser(user)
               console.log(error);
               
            });
              
            
            
        })
        .catch(error=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorCode)
            setPasswordError(errorCode)
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

                        {/* pass error check  */}

                        {passwordError && (
                            <p className='text-secondary text-sm font-medium pt-1'>
                                {passwordError}
                            </p>
                        )}

                        <p className='font-semibold pt-5'>Already Have an Account? <Link className='text-secondary' to='/login'> Login</Link></p>

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;