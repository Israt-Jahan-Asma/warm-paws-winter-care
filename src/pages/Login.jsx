import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";
import toast from 'react-hot-toast';
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from 'firebase/auth';
const Login = () => {
    const { signIn, signInWithGoogle } = use(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const googleProvider = new GoogleAuthProvider()
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value


        signIn(email, password)
            .then(result => {
                const user = result.user
                toast.success('You have login successfully!')
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, errorMessage)
                setError(errorCode, errorMessage)
            })
    }
    const handleForget = () => {
        navigate('/forget-password', { state: { email } })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then(result => {

                toast.success('You have login successfully!')
                navigate(`${location.state ? location.state : '/'}`)

            })
            .catch(error => {

                toast.error(error.message)

            })
    }
    return (
        <div className='flex justify-center h-full items-center py-10 card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto my-10'>
            <div className="card-body space-y-5">
                <h2 className='text-2xl font-bold text-primary text-center'>Login Your Account</h2>
                <form className='w-80 mx-auto' onSubmit={handleLogin}>

                    <fieldset className="fieldset relative">

                        <label className="label">Email</label>
                        <input onChange={e => { setEmail(e.target.value) }} value={email} name='email' type="email" className="input" placeholder="Email" required />

                        <label className="label ">Password</label>
                        <input name='password'
                            type={show ? 'text' : 'password'}

                            className="input " placeholder="Password" required />
                        <span onClick={() => setShow(!show)} className='absolute  top-28 right-3 z-10 '>
                            {
                                show ? <LuEye className=' h-4 w-4' /> : <LuEyeClosed className=' h-4 w-4' />
                            } </span>

                        {
                            error && <p className='text-secondary'> {error}</p>
                        }

                        <button onClick={handleForget} className='text-primary text-left underline cursor-pointer'>Forget Password? Click Here</button>
                       
                       
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                        {/* divider */}
                        <div className='flex items-center justify-center gap-2 my-3'>
                            <div className='h-px w-20 bg-secondary '></div>
                            <span>or</span>
                            <div className='h-px w-20 bg-secondary '></div>
                        </div>
                        {/* google login code  */}
                        <button className='flex items-center justify-center gap-3 bg-secondary py-2 rounded-sm text-accent font-semibold cursor-pointer'
                            type='button'
                            onClick={handleGoogleSignIn}>
                            <FaGoogle className='w-5 h-5 text-accent' />
                            Continue with Google
                        </button>

                        <p className='font-semibold pt-5'>Don't Have an Account? <Link className='text-secondary' to='/register'> Register</Link></p>
                        
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;