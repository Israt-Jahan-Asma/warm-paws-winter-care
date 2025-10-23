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
        <div className='p-10 mx-auto'>
            <div className=" p-10 mx-auto w-6/12 border border-secondary bg-base-200 shadow rounded-2xl space-y-5">

                <img
                    src={cardDetails.image}
                    alt={cardDetails.serviceName}
                    className="w-full h-150 object-cover my-4 rounded-lg shadow"
                />
                <h1 className="text-3xl font-bold">{cardDetails.serviceName}</h1>
                <p className='text-2xl'>{cardDetails.description}</p>
                <p className="font-semibold text-[20px] my-2">Price: {cardDetails.price}</p>
                <p className="font-semibold text-[20px]">Rating: {cardDetails.rating}</p>
            </div>
            <div className='mx-auto w-6/12 mt-10'>
                <h2 className='text-2xl font-bold text-primary text-center'>Book Service</h2>
                <div className="card-body">
                    <form className='w-80 mx-auto' onSubmit={handleBooking}>
                        <fieldset className="fieldset">
                            
                            <label className="label">Name</label>
                            <input type="text" className="input" placeholder="Name" required />

                            <label className="label">Email</label>
                            <input type="email" className="input" placeholder="Email" required/>
                            <button className="btn btn-neutral mt-4">Book</button>
                        </fieldset>
                  </form>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
