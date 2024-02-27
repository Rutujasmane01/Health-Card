import React from 'react';

function Contact() {
    return (
        <div className="container mx-auto px-4 py-8 bg-gradient-to-r from-indigo-200 blue-200 to-sky-200">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg mb-4">
                Have a question or need assistance? Feel free to reach out to us using the contact information below.
            </p>
            <div className="flex flex-col space-y-4">
                <p className="text-lg">
                    <span className="font-semibold">Email:</span> info@healthcard.com
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Phone:</span> +1 (123) 456-7890
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Address:</span> 123 Main Street, City, Country
                </p>
            </div>
        </div>
    );
}

export default Contact;
