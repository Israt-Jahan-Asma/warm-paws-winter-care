import React from 'react';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router';

const BookSection = () => {
    const handleBooking = (e) => {
        const form = e.target;
        e.preventDefault();
        toast.success('🎉 Congratulations! You have Book the Service.')
        form.reset();
    }
    return (
        <div className='bg-base-200 py-15'>
            <div className='w-11/12 mx-auto flex items-center justify-between '>
                <div className='space-y-3'>
                    <h2 className='text-4xl font-bold text-secondary'>PetCare is a totally awesome & unique. <br />Book your service Now!</h2>
                    <p className='text-primary font-semibold'>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. <br />Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                </div>
                <div>

                    <div className=''>
                        <h2 className='text-2xl font-bold text-primary text-center'>Book Service</h2>
                        <div className="">
                            <form onSubmit={handleBooking}>
                                <fieldset className="fieldset space-y-2">

                                    <label className="label">Name</label>
                                    <input type="text" className="input w-[400px]" placeholder="Name" required />

                                    <label className="label">Email</label>
                                    <input type="email" className="input w-[400px]" placeholder="Email" required />
                                    <button className="btn btn-neutral mt-4">Book</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookSection;