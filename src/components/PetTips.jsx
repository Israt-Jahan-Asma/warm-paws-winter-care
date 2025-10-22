import React, { use } from 'react';
const petTips = fetch('/petTips.json')
    .then(res => res.json())
const PetTips = () => {
    const winterTips = use(petTips)
    return (
        <section className="py-16 mt-20 bg-base-200">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold text-primary">Winter Care Tips for Pets</h2>
                <p className="text-gray-600 mt-2">Keep your furry friends safe and cozy this winter.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4   w-11/12 mx-auto">
                {winterTips.map(tip => (
                    <div key={tip.id} className=" p-6 rounded-lg shadow-md text-center">
                        <div className="text-5xl mb-4">{tip.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                        <p className="text-gray-600">{tip.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
    
};

export default PetTips;