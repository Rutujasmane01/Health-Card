import React from 'react';

function About() {
    return (
        <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-indigo-200 blue-200 to-sky-200">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-4">
                At Health Card, we are dedicated to providing innovative solutions for managing your health information securely and conveniently. 
                Our platform is designed to empower individuals to take control of their medical records, ensuring accessibility, privacy, and peace of mind.
            </p>
            <p className="text-lg">
                Our mission is to revolutionize the healthcare industry by leveraging technology to simplify and streamline the management of health data. 
                We believe that everyone should have easy access to their medical history, appointments, prescriptions, and more, all in one centralized location.
            </p>
        </div>
    );
}

export default About;
