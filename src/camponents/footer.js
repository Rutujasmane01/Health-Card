import React from 'react';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-blue-500 to-slate-700 text-white py-6">
            <div className="container mx-auto flex justify-center items-center">
                <div className="text-center">
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <div className="flex justify-center space-x-4">
                        <a href="#" className="text-gray-300 hover:text-white">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-300 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-center">
                <p>&copy; 2024 Health Card. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;


