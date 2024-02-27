import React from 'react';
import Navbar from "./Navbar";
import healthImage from './healthImage.jpg'; // Replace 'health_image.jpg' with the path to your image

function Home() {
    // Define an array of objects with information for each service
    const services = [
        {
            title: "Health ID Registration and Management Service",
            description: "This service provides seamless registration and issuance of unique health IDs to every user upon signup. These health IDs serve as secure access keys to individuals' comprehensive health information stored within our platform. With this service, users can effortlessly manage their medical records, ensuring accessibility and privacy."
        },
        {
            title: "Medical Record Management Service",
            description: "This service offers secure and efficient management of patient health records by authorized healthcare professionals. Our platform enables doctors to seamlessly upload and update patient information, including diagnoses, treatments, and medical histories. With this service, healthcare providers can access comprehensive patient data, facilitating informed decision-making and personalized care."
        },
        {
            title: "Centralized Health Records Access",
            description: "Centralized Health Records Access service offers a streamlined platform for accessing and managing all your health details and treatment reports securely. With our centralized system, you no longer need to worry about remembering or losing important medical information. Our platform allows authorized healthcare professionals to search for patient records efficiently, ensuring quick access to vital health data for informed decision-making and personalized care."
        }
    ];

    return (
        <div className="container mx-auto bg-gradient-to-r from-indigo-200 blue-200 to-sky-200">
            {/* Image Section */}
            <section className="mb-8">
                <img src={healthImage} alt="Health Image" className="rounded-lg shadow-lg w-full" />
            </section>

            {/* Information Section */}
            <section className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif text-sky-800">Welcome to Health Card</h2>
                <p className="text-lg  text-gray-600 mb-8 text-Fuchsia-500">Your personalized health information platform</p>
                <p className="text-gray-700 mb-8 text-balance text-Fuchsia-500">
                    Health Card is our one-stop solution for managing your health information securely and conveniently. With our platform, you can access your medical records anytime, anywhere, ensuring that your important health data is always at your fingertips. Our user-friendly interface makes it easy to track your medical history, appointments, prescriptions, and more.
                </p>
            </section>

            {/* Services Section */}
            <section>
                <h3 className="text-2xl font-bold text-sky-800 mb-4 ml-4 px-4">Our Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-4 mr-4 shadow-2xl py-4 px-2">
                    {/* Map over the services array to generate service cards dynamically */}
                    {services.map((service, index) => (
                        <div key={index} className="bg-sky-100 rounded-lg shadow-md p-6">
                            <h4 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h4>
                            <p className="text-gray-700">{service.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div className="size-8">
                
            </div>
        </div>
    );
}

export default Home;

