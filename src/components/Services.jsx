import React, { Suspense, use, useEffect } from 'react';
import PetTips from './PetTips';
import ExpertVets from './ExpertVets';
import { NavLink } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";


const servicePromise = fetch('/service.json')
.then(res=>res.json())
const Services = () => {
    const services = use(servicePromise)
    
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1800, 
            once: true,    
            offset: 100,  
        });
    }, []);

    return (
        <div id="services-section"  className='py-20'>
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="font-extrabold text-3xl md:text-4xl text-primary">
                    Popular Winter Care Services
                </h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Keep your pets warm, cozy, and happy this winter ❄️
                </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-10/12 mx-auto">
                {services.map(service => (
                    <div
                        key={service.serviceId}
                        className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-300 hover:border-secondary"
                        data-aos="zoom-in"
                    >
                        <figure className="relative">
                            <img
                                src={service.image}
                                alt={service.name}
                                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-t-xl"
                            />
                            <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300 rounded-t-xl"></div>
                        </figure>

                        <div className="card-body px-6 py-5 text-center">
                            <h2 className="card-title justify-center text-lg md:text-xl text-secondary font-bold">
                                {service.serviceName}
                            </h2>
                            <p className="text-gray-600 mt-2 text-sm">
                                Rating: <span className="font-semibold text-yellow-500">{service.rating}</span>
                            </p>
                            <p className="text-gray-700 text-sm mb-4">
                                Price: <span className="font-semibold text-primary">${service.price}</span>
                            </p>
                            <div>
                                <NavLink
                                    to={`/service-details/${service.serviceId}`}
                                    className="btn btn-secondary text-white px-6 rounded-full hover:bg-secondary/80 transition-all duration-200"
                                >
                                    View Details
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Spacing before next sections */}
            <div className="mt-20">
                <PetTips />
            </div>
            <div className="mt-20">
                <ExpertVets />
            </div>
        </div>
    );
};

export default Services;