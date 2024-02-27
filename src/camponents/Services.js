import React, { useState } from 'react';
import doctorIcon from './doctor.jpg';
import userIcon from './user.jpg';

function Services() {
    const [isDoctor, setIsDoctor] = useState(true);
    const [showSignup, setShowSignup] = useState(false);

    const handleUserClick = () => {
        setIsDoctor(false);
    };

    const handleDoctorClick = () => {
        setIsDoctor(true);
    };

    const handleSignupClick = () => {
        setShowSignup(true);
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-indigo-200 blue-200 to-sky-200 flex justify-center items-center p-8">
            <div className="container mx-auto bg-gradient-to-r from-indigo-300 blue-300 to-sky-300 rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Welcome to Health Portal</h2>
                <div className="flex justify-center mb-4">
                    <button onClick={handleDoctorClick} className="mr-4">
                        <img src={doctorIcon} alt="Doctor" className={` rounded-full w-20 h-20 cursor-pointer ${isDoctor ? 'bg-blue-500' : 'bg-gray-300'}`} />
                    </button>
                    <button onClick={handleUserClick}>
                        <img src={userIcon} alt="User" className={`rounded-full w-20 h-20 cursor-pointer ${!isDoctor ? 'bg-blue-500' : 'bg-gray-300'}`} />
                    </button>
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="w-96">
                        <h3 className="text-lg font-semibold mb-2 text-center">{isDoctor ? 'Doctor' : 'User'} {showSignup ? 'Sign Up' : 'Log In'}</h3>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">
                                    {showSignup ? 'Full Name' : 'Health Card id'}
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    placeholder={showSignup ? 'Enter your full name' : 'Enter your health card id'}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your password"
                                />
                            </div>
                            {/* Additional fields for doctor signup */}
                            {isDoctor && showSignup && (
                                <>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="degree">
                                            Degree
                                        </label>
                                        <input
                                            type="text"
                                            id="degree"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                            placeholder="Enter your degree"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="experience">
                                            Experience
                                        </label>
                                        <input
                                            type="text"
                                            id="experience"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                            placeholder="Enter your experience"
                                        />
                                    </div>
                                </>
                            )}
                            {/* Additional fields for user signup */}
                            {!isDoctor && showSignup && (
                                <>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="aadhar">
                                            Aadhar Number
                                        </label>
                                        <input
                                            type="text"
                                            id="aadhar"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                            placeholder="Enter your Aadhar number"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="age">
                                            Age
                                        </label>
                                        <input
                                            type="text"
                                            id="age"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                            placeholder="Enter your age"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobile">
                                            Mobile Number
                                        </label>
                                        <input
                                            type="text"
                                            id="mobile"
                                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                            placeholder="Enter your mobile number"
                                        />
                                    </div>
                                </>
                            )}
                            <div className="mt-4">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">
                                    {showSignup ? 'Sign Up' : 'Log In'}
                                </button>
                            </div>
                        </form>
                        <div className="text-center mt-4">
                            <button onClick={handleSignupClick} className="text-blue-500">
                                {showSignup ? 'Back to Login' : 'Sign Up'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;





















