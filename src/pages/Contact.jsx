const Contact = () => {
    return (
        <div className="px-6 py-14 max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center text-[#ff914d]">
                Contact Us
            </h1>

            <p className="text-lg text-gray-700 text-center mb-10">
                Have questions or want to book a service? We’d love to hear from you!
            </p>

            <form className="grid gap-6 bg-white shadow-lg p-8 rounded-xl">
                <div className="grid gap-2">
                    <label className="font-semibold">Your Name</label>
                    <input
                        type="text"
                        className="border border-gray-300 px-4 py-3 rounded-md"
                        placeholder="Enter your name"
                    />
                </div>

                <div className="grid gap-2">
                    <label className="font-semibold">Email Address</label>
                    <input
                        type="email"
                        className="border border-gray-300 px-4 py-3 rounded-md"
                        placeholder="Enter your email"
                    />
                </div>

                <div className="grid gap-2">
                    <label className="font-semibold">Message</label>
                    <textarea
                        rows="5"
                        className="border border-gray-300 px-4 py-3 rounded-md"
                        placeholder="How can we help you?"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-secondary text-white py-3 text-[14px] font-semibold hover:bg-secondary/80 rounded-lg"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default Contact;
  