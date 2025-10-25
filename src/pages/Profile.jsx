import React, { useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { use } from "react";
import toast from "react-hot-toast";
import userIcon from '/icons8-user-50.png';

const Profile = () => {
    const { user, setUser, updateUser } = use(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const [photo, setPhoto] = useState(user?.photoURL);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateUser({
            displayName: name,
            photoURL: photo,
        })
            .then(() => {
                setUser({
                    ...user,
                    displayName: name,
                    photoURL: photo,
                });
                toast.success("Profile updated successfully!");
                e.target.reset()
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="card w-96 mx-auto shadow-lg p-7 space-y-4 my-20 bg-secondary">
            <h2 className="text-2xl font-bold text-center">My Profile</h2>

            <img
                src={`${user ? user.photoURL : userIcon}`}
                alt="User"
                className="w-24 h-24 rounded-full mx-auto border p-2"
            />
            <p className="text-center font-semibold">{user?.displayName}</p>

            <form onSubmit={handleUpdate} className="space-y-3">
                <input
                    type="text"
                    className="input input-bordered w-full"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                />
                <input
                    type="text"
                    className="input input-bordered w-full"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    placeholder="Enter photo URL"
                />
                <button type="submit" className="btn btn-neutral w-full">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;
