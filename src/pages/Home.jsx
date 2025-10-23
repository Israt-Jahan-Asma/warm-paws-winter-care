import React, { Suspense } from 'react';
import Slider from '../components/Slider';
import Services from '../components/Services';
import { PropagateLoader } from "react-spinners";
import BookSection from '../components/BookSection';
const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Suspense fallback={
                
                <div className="flex justify-center items-center py-20 min-h-[30vh]">
                    <PropagateLoader color="#E1875E" />
                </div>
            }>
                <Services />
            </Suspense>
            <BookSection></BookSection>
        </div>
    );
};

export default Home;