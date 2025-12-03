

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const images = [
    'https://images.unsplash.com/photo-1588032215063-646feee2e1d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1169',
    'https://plus.unsplash.com/premium_photo-1683133780970-98db7131a20f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    'https://images.unsplash.com/photo-1595521355985-bd4341ac89a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170',
    'https://images.unsplash.com/photo-1698632196437-f72ea03b831f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1252'
];

const Slider = () => {
    // const swiperRef = useRef(null);
    const handleScroll = () => {
        const section = document.getElementById("book-section");
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      };
    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         if (swiperRef.current) {
    //             swiperRef.current.swiper.update(); // force recalc
    //         }
    //     }, 400);
    //     return () => clearTimeout(timeout);
    // }, []); 
    return (
        <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden ">
            <Swiper
                direction="vertical"
                pagination={{ clickable: true }}
                modules={[Pagination, Autoplay]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="mySwiper w-full h-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object object-cover"
                            />
                            
                            <div className="absolute inset-0 bg-black/50"></div>

                            {/* Centered Text & Button */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                                <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
                                    Your Dream Vacation Awaits
                                </h1>
                                <p className="mt-3 text-sm md:text-lg opacity-90">
                                    Experience luxury, comfort, and nature — all in one place.
                                </p>
                                <button
                                    onClick={handleScroll}
                                    className="mt-6 btn bg-secondary text-white border-none px-6 py-2 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
  };

export default Slider;
