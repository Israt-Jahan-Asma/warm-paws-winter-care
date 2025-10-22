import React, { use } from 'react';
const vetPromise = fetch('/vets.json')
    .then(res => res.json())
const ExpertVets = () => {
    const vets = use(vetPromise)
    return (
        <section className="py-16 bg-white  w-11/12 mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-primary">Meet Our Expert Vets</h2>
                <p className="text-gray-600 mt-2">Professional care for your beloved pets</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {vets.map(vet => (
                    <div key={vet.id} className="card bg-base-100 shadow-lg rounded-lg text-center p-6">
                        <img
                            src={vet.image}
                            alt={vet.name}
                            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold">{vet.name}</h3>
                        <p className="text-gray-500">{vet.specialization}</p>
                        <p className="text-gray-400 text-sm mt-1">{vet.experience}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExpertVets;