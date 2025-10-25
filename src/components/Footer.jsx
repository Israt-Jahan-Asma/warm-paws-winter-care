import React from 'react';

const Footer = () => {
    return (
        <footer className=" text-secondary py-12 mt-16">
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start md:items-center">

                {/* --- Logo Section --- */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
                    <img
                        src="https://i.postimg.cc/xTv0mywj/Gemini-Generated-Image-e44qtie44qtie44q-1.png"
                        alt="Logo"
                        className="w-20 h-20 object-contain"
                    />
                    <p className="text-sm text-accent max-w-xs">
                        Your trusted partner in pet care. Providing comfort, care, and compassion for your furry friends. 🐾
                    </p>
                </div>

                {/* --- Services Section --- */}
                <nav className="text-accent text-center md:text-left">
                    <h6 className="footer-title text-lg font-semibold text-accent mb-3">Services</h6>
                    <a className="link link-hover block mb-1">Branding</a>
                    <a className="link link-hover block mb-1">Design</a>
                    <a className="link link-hover block mb-1">Marketing</a>
                    <a className="link link-hover block mb-1">Advertisement</a>
                </nav>

                {/* --- Company Section --- */}
                <nav className="text-accent text-center md:text-left">
                    <h6 className="footer-title text-lg font-semibold text-accent mb-3">Company</h6>
                    <a className="link link-hover block mb-1">About Us</a>
                    <a className="link link-hover block mb-1">Contact</a>
                    <a className="link link-hover block mb-1">Jobs</a>
                    <a className="link link-hover block mb-1">Press Kit</a>
                </nav>

                {/* --- Social Media Section --- */}
                <nav className="text-accent flex flex-col items-center justify-between md:items-start">
                    <h6 className="footer-title text-lg font-semibold text-accent mb-3">Follow Us</h6>
                    <div className="flex gap-5">
                        <a className="hover:scale-110 transition-transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                className="fill-current text-accent hover:text-secondary">
                                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.384 4.482A13.957 13.957 0 0 1 1.671 3.149a4.918 4.918 0 0 0 1.523 6.574A4.902 4.902 0 0 1 .96 9.1v.062a4.918 4.918 0 0 0 3.946 4.827 4.935 4.935 0 0 1-2.212.084 4.922 4.922 0 0 0 4.6 3.419A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A9.935 9.935 0 0 0 24 4.557z"></path>
                            </svg>
                        </a>
                        <a className="hover:scale-110 transition-transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                className="fill-current text-accent hover:text-secondary">
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 15.999v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a className="hover:scale-110 transition-transform">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                viewBox="0 0 24 24"
                                className="fill-current text-accent hover:text-secondary">
                                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4h-4V6.333C13 5.378 13.192 5 14.115 5H17V0h-3.808C9.596 0 8 1.583 8 4.615V8z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>

            {/* --- Bottom Line --- */}
            <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-accent ">
                © {new Date().getFullYear()} PetCare Co. | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
