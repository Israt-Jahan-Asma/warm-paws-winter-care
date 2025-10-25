import React, { use } from 'react';
const vetPromise = fetch('/vets.json')
    .then(res => res.json())
const ExpertVets = () => {
    const vets = use(vetPromise)
    return (
        <section className="py-16">
            <div className='w-11/12 mx-auto'> 
            {/* Section Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                    Meet Our Expert Vets
                </h2>
                <p className="text-gray-600 mt-3 text-base md:text-lg">
                    Professional care for your beloved pets
                </p>
            </div>

            {/* Vet Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-2 sm:px-4">
                {vets.map((vet) => (
                    <div
                        key={vet.id}
                        data-aos="flip-left"
                        className="card bg-white shadow-lg rounded-2xl text-center p-6 hover:scale-105 transition-transform duration-300"
                    >
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-secondary mb-4">
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
        </section>
    );
};

export default ExpertVets;