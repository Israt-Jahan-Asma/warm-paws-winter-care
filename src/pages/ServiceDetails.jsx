import React, { use, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData, useParams } from 'react-router';
const vetPromise = fetch('/vets.json')
    .then(res => res.json())

const ServiceDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [cardDetails, setCardDetails] = useState(null);
    const vets = use(vetPromise)
    useEffect(() => {
        if (data && id) {
            const found = data.find(sCard => sCard.serviceId == id);
            setCardDetails(found);
        }
    }, [data, id]);

    if (!cardDetails) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    const handleBooking = (e) => {
        e.preventDefault();
        toast.success('🎉 Congratulations! You have booked the service.');
        e.target.reset();
    };

    return (
        <div className="w-10/12 mx-auto py-16 space-y-20">

            {/*  Service Details Card */}
            <div className="bg-base-200 shadow-xl rounded-3xl overflow-hidden border border-secondary flex flex-col md:flex-row">

                {/* Image */}
                <div className="md:w-1/2">
                    <img
                        src={cardDetails.image}
                        alt={cardDetails.serviceName}
                        className="w-full h-80 md:h-[570px] object-cover hover:scale-[1.03] transition duration-500"
                    />
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-10  space-y-5">
                    <h1 className="text-4xl font-bold text-primary">
                        {cardDetails.serviceName}
                    </h1>

                    <p className="text-gray-600 text-sm md:text-base ">
                        {cardDetails.description}
                    </p>

                    {/* Extra provider info block */}

                    <p className="font-semibold text-lg text-primary">Provided By: <span className='font-normal'>{cardDetails.providerName}</span></p>

                    {/* Price / Rating */}
                    <div className="flex flex-wrap gap-8 pt-4 text-lg font-semibold">
                        <p className="text-secondary">💰 Price: ${cardDetails.price}</p>
                        <p className="text-secondary">⭐ Rating: {cardDetails.rating}</p>
                        <p className="text-secondary">📦 Slots: {cardDetails.slotsAvailable}</p>
                    </div>
                </div>
            </div>


                <div className='flex gap-5 w-full mx-auto justify-between '>
                    <div>
                    <h3 className='text-3xl font-bold text-primary mb-6'> Book Now our expert vet</h3>
                    {/* Vet Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
                        {vets.map((vet) => (
                            <div
                                key={vet.id}
                               
                                className="w-full bg-white shadow-lg rounded-2xl text-center p-6"
                            >
                                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-secondary mb-4">
                                    <img
                                        src={vet.image}
                                        alt={vet.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold text-primary">
                                    {vet.name}
                                </h3>
                                <p className="text-gray-500 text-sm md:text-base mt-1">
                                    {vet.specialization}
                                </p>
                                <p className="text-gray-400 text-xs md:text-sm mt-1">
                                    {vet.experience}
                                </p>
                            </div>
                        ))}
                    </div>
                    </div>
                {/* ⭐ 2. Booking Form Column (EXISTING CODE) */}
                <div className="bg-base-100 shadow-xl border border-secondary rounded-3xl p-12 w-1/2">
                    <h2 className="text-3xl font-bold text-center text-primary mb-10">
                        Book This Service
                    </h2>

                    <form onSubmit={handleBooking} className="space-y-7">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Full Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered w-full"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email Address</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered w-full"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Phone Number</span>
                            </label>
                            <input
                                type="tel"
                                className="input input-bordered w-full"
                                placeholder="e.g., (555) 123-4567"
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

                        <button className="btn btn-secondary w-full mt-6 text-lg font-semibold">
                            Book Now
                        </button>
                    </form>
                </div>
                </div>




            {/* Why Choose Us Section */}
            <div className="bg-gradient-to-r from-secondary/10 to-primary/10 py-16 px-8 rounded-3xl text-center space-y-7 shadow-md">
                <h3 className="text-3xl font-bold text-primary">Why Choose Us?</h3>
                <p className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
                    We offer reliable, professional, and compassionate care tailored
                    to your pet’s unique needs. With certified experts, safe
                    practices, and a 5⭐ experience guarantee — your pet is always in
                    loving hands. 🐾
                </p>
            </div>

        </div>
    );
};

export default ServiceDetails;
