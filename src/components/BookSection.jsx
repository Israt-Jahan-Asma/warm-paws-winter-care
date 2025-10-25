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
        <section id="book-section" className="bg-base-200 py-16">
            <div className="w-11/12 max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

                {/* Left Text */}
                <div className="space-y-4 text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">
                        PetCare is a totally awesome & unique.<br />
                        Book your service Now!
                    </h2>
                    <p className="text-primary font-medium text-sm sm:text-base md:text-lg">
                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.<br />
                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
                    </p>
                </div>

                {/* Right Form */}
                <div className="w-full lg:w-auto">
                    <div className="bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-10">
                        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-4">
                            Book Service
                        </h2>
                        <form onSubmit={handleBooking} className="space-y-4">
                            <div className="flex flex-col gap-2">
                                <label className="label font-medium">Name</label>
                                <input
                                    type="text"
                                    className="input w-full sm:w-[400px]"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="label font-medium">Email</label>
                                <input
                                    type="email"
                                    className="input w-full sm:w-[400px]"
                                    placeholder="Email"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-neutral w-full sm:w-auto mt-2 px-6 py-2 rounded-lg"
                            >
                                Book
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookSection;