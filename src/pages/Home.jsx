import React, { Suspense } from 'react';
import Slider from '../components/Slider';
import Services from '../components/Services';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Suspense fallback={
                
                <div className="flex justify-center items-center py-20 min-h-[30vh]">
                    <span className="loading loading-bars loading-xl text-primary"></span>
                </div>
            }>
                <Services />
            </Suspense>
        </div>
    );
};

export default Home;