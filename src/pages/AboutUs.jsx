const AboutUs = () => {
    return (
        <div className="md:px-6 py-14 max-w-10/12 mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-center text-primary">
                About Warm Paws Pet Care
            </h1>

            <p className="text-lg leading-8 text-gray-600 mb-6 text-center">
                Warm Paws Pet Care is dedicated to providing trustworthy, loving, and
                professional pet services. From dog walking to pet sitting, we ensure your
                furry family members receive the best care possible.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-10">
                <div>
                    <h2 className="text-2xl text-primary font-bold mb-3">🐾 Our Story</h2>
                    <p className="text-gray-700 leading-7">
                        Warm Paws started with one mission — to give pets the love and care
                        they deserve. As lifelong animal lovers, we turned our passion into a
                        service that keeps pets happy, healthy, and active while their owners
                        are away.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl text-primary  font-bold mb-3">💛 Our Values</h2>
                    <ul className="list-disc ml-6 text-gray-700 leading-7">
                        <li>Safe and stress-free pet care</li>
                        <li>Reliable and punctual service</li>
                        <li>Love and compassion for every animal</li>
                        <li>Professional and trained caregivers</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
  