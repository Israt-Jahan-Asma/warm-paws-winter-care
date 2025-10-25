import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router';

const ServiceDetails = () => {
    const { id } = useParams();
    const data = useLoaderData(); 
    const [cardDetails, setCardDetails] = useState(null);

    useEffect(() => {
        if (data && id) {
            const found = data.find(sCard => sCard.serviceId == id); 
            setCardDetails(found);
        }
    }, [data, id]);

    if (!cardDetails) {
        return <p className="text-center mt-10">Loading...</p>;
    }
    const handleBooking=(e)=>
    {
        const form = e.target;
        e.preventDefault();
        toast.success('🎉 Congratulations! You have Book the Service.')
        form.reset();
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
            {/* Service Details Section */}
            <div className="flex flex-col md:flex-row bg-base-200 shadow-xl rounded-3xl overflow-hidden border border-secondary">
                <div className="md:w-1/2">
                    <img
                        src={cardDetails.image}
                        alt={cardDetails.serviceName}
                        className="w-full h-80 md:h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary">
                        {cardDetails.serviceName}
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        {cardDetails.description}
                    </p>
                    <div className="flex flex-wrap gap-6 pt-4 text-lg font-semibold">
                        <p className="text-secondary">💰 Price: {cardDetails.price}</p>
                        <p className="text-secondary">⭐ Rating: {cardDetails.rating}</p>
                    </div>
                </div>
            </div>

            {/* Booking Section */}
            <div className="bg-base-100 shadow-lg border border-secondary rounded-2xl p-10 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-primary mb-8">
                    Book This Service
                </h2>
                <form onSubmit={handleBooking} className="space-y-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Email Address</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Preferred Date</span>
                        </label>
                        <input
                            type="date"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <button className="btn btn-secondary w-full mt-4 text-lg font-semibold">
                        Book Now
                    </button>
                </form>
            </div>

            {/* optional section i made for look good  */}
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 py-16 rounded-3xl text-center space-y-6">
                <h3 className="text-3xl font-bold text-primary">Why Choose Us?</h3>
                <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
                    We provide trusted care, certified experts, and personalized service
                    for your pets. Your satisfaction and your pet’s well-being are our
                    top priorities. 🐾
                </p>
            </div>
        </div>
    );
};

export default ServiceDetails;
