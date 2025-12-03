import React, { Suspense, use, useEffect, useState, useMemo } from 'react';
import PetTips from './PetTips';
import ExpertVets from './ExpertVets';
import { NavLink } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";


const servicePromise = fetch('/service.json')
    .then(res => res.json());

const Services = () => {

    const allServices = use(servicePromise);
    const [sortKey, setSortKey] = useState(null); 
    const [sortOrder, setSortOrder] = useState('asc'); 

    // Filtering State
    const [filterText, setFilterText] = useState('');

    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1800,
            once: true,
            offset: 100,
        });
    }, []);

    // 2. Sorting and Filtering Logic
    const displayedServices = useMemo(() => {
        let filtered = allServices;

        // --- Filtering ---
        if (filterText) {
            const lowercasedFilterText = filterText.toLowerCase();
            filtered = allServices.filter(service =>
                service.serviceName.toLowerCase().includes(lowercasedFilterText)
            );
        }

        // --- Sorting ---
        if (sortKey) {
            
            filtered = [...filtered].sort((a, b) => {
                let comparison = 0;

                if (sortKey === 'price' || sortKey === 'rating') {
                    const valA = parseFloat(a[sortKey]);
                    const valB = parseFloat(b[sortKey]);
                    if (valA > valB) {
                        comparison = 1;
                    } else if (valA < valB) {
                        comparison = -1;
                    }
                }

                else if (sortKey === 'serviceName') {
                    comparison = a.serviceName.localeCompare(b.serviceName);
                }

                // Apply the sorting order
                return sortOrder === 'desc' ? comparison * -1 : comparison;
            });
        }

        return filtered;
    }, [allServices, sortKey, sortOrder, filterText]);

    // 3. Handler Functions 
    const handleSortChange = (e) => {
        const value = e.target.value;
        const [key, order] = value.split('-');

        setSortKey(key === 'none' ? null : key);
        setSortOrder(order || 'asc');
    };

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };


    return (
        <div id="services-section" className='py-20'>

            <div className="text-center mb-12">
                <h2 className="font-extrabold text-3xl md:text-4xl text-primary">
                    Popular Winter Care Services
                </h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                    Keep your pets warm, cozy, and happy this winter ❄️
                </p>
            </div>

{/* sort function implement */}
            <div className="flex  justify-between w-10/12 gap-4 mb-12 mx-auto">

                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Search by Service Name..."
                        className="input input-bordered w-full md:w-80"
                        value={filterText}
                        onChange={handleFilterChange}
                    />
                </div>

                {/* Sorting Dropdown */}
                <div className="form-control">
                    <select
                        className="select select-bordered w-full md:w-60"
                        onChange={handleSortChange}
                        value={sortKey ? `${sortKey}-${sortOrder}` : 'none'}
                    >
                        <option value="none">Select Sorting</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="rating-desc">Rating: High to Low</option>
                        <option value="rating-asc">Rating: Low to High</option>
                        <option value="serviceName-asc">Name: A-Z</option>
                        <option value="serviceName-desc">Name: Z-A</option>
                    </select>
                </div>
            </div>


            {/* Service Cards Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-10/12 mx-auto mt-12">
                {displayedServices.length > 0 ? (
                    displayedServices.map(service => (
                        <div
                            key={service.serviceId}
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-300 hover:border-secondary"
                            data-aos="zoom-in"
                        >
                            <figure className="relative">
                                <img
                                    src={service.image}
                                    alt={service.serviceName}
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
                    ))
                ) : (
                    <div className="lg:col-span-4 text-center p-10 bg-gray-100 rounded-lg">
                        <p className="text-lg text-gray-500">
                            Sorry, no services were found matching your criteria.
                        </p>
                    </div>
                )}
            </div>


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