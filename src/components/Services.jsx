import React, { Suspense, use } from 'react';
import PetTips from './PetTips';
import ExpertVets from './ExpertVets';
import { NavLink } from 'react-router';
const servicePromise = fetch('/service.json')
.then(res=>res.json())
const Services = () => {
    const services = use(servicePromise)
    console.log(services);
    
    return (
        <div className='py-20'>
            <div>
                <h2 className='font-bold text-4xl text-primary text-center'>Popular Winter Care Services
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-15  w-11/12 mx-auto">

                    {services.map(service => (
                        <div key={service.id} className="card bg-base-100 shadow-lg">
                            <figure>
                                <img src={service.image} alt={service.name} className="w-full h-96 object-cover" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{service.serviceName}</h2>
                                <p>Rating: {service.rating}</p>
                                <p>Price: {service.price}</p>
                                <NavLink to={`/service-details/${service.serviceId}`} className="btn text-accent bg-secondary">View Details </NavLink>
                            </div>
                        </div>
                    ))}

            </div>
            <PetTips></PetTips>
            <ExpertVets></ExpertVets>
        </div>
    );
};

export default Services;