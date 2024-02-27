import { useState } from 'react';
import icon from './icon.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between w-full h-20 px-6 bg-gradient-to-r from-blue-500 to-slate-700">
            <div className="flex items-center">
                <a href="/" className="flex items-center">
                    <img className="w-10 h-10 mr-4" src={icon} alt="Health Card Icon" />
                    <h1 className="text-2xl font-bold text-white">Health Card</h1>
                </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
                <a href="#home" className="text-white hover:text-gray-300">Home</a>
                <a href="#about" className="text-white hover:text-gray-300">About</a>
                <a href="#services" className="text-white hover:text-gray-300">Services</a>
                <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
            </div>
            <button
                className="md:hidden text-white"
                onClick={toggleMenu}
                aria-expanded={isOpen ? "true" : "false"}
                aria-controls="mobile-menu"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M6.293 6.293a1 1 0 011.414 0L10 8.586l2.293-2.293a1 1 0 111.414 1.414L11.414 10l2.293 2.293a1 1 0 11-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 6a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1zM9 14a1 1 0 100 2h2a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                )}
            </button>
            {isOpen && (
                <div id="mobile-menu" className="md:hidden flex flex-col mt-2 space-y-2">
                    <a href="#home" className="text-white hover:text-gray-300">Home</a>
                    <a href="#about" className="text-white hover:text-gray-300">About</a>
                    <a href="#services" className="text-white hover:text-gray-300">Services</a>
                    <a href="#contact" className="text-white hover:text-gray-300">Contact</a>
                </div>
            )}
        </nav>
    );
}

export default Navbar;

