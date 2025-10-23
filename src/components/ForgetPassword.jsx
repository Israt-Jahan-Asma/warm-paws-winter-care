import React, { useState } from "react";
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import toast from "react-hot-toast";
import app from "../firebase/firebase.config";  // your firebase setup
import { useLocation } from "react-router";

const auth = getAuth(app);

const ForgetPassword = () => {
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email);
    

    const handleReset = (e) => {
        e.preventDefault();

        if (!email) {
            toast.error("Please enter your email address");
            return;
        }

        sendPasswordResetEmail(auth, email)
            .then(() => {
                toast.success("Password reset link sent! Redirecting to Gmail...");
                
                setTimeout(() => {
                    window.open("https://mail.google.com", "_blank");
                }, 1000);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="flex justify-center items-center py-10 mx-auto my-10 ">
            <div className="card bg-secondary shadow-2xl p-10 w-96">
                <h2 className="text-2xl font-bold text-accent text-center mb-5">
                    Reset Your Password
                </h2>
                <form onSubmit={handleReset}>
                    <fieldset className="fieldset ">
                        <label className="label text-accent">Email</label>
                        <input
                            type="email"
                            className="input input-bordered w-full "
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <button type="submit" className="btn btn-neutral w-full mt-5">
                            Send Reset Link
                        </button>

                        <p className="text-sm text-center mt-3 text-accent">
                            You’ll be redirected to Gmail after sending the reset link.
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword;
