import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const token = localStorage.getItem('token');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
       navigate('/');
    };

    return (
        <nav className="bg-blue-700">
            <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <span className="text-xl md:text-2xl font-semibold whitespace-nowrap text-white">Open Weather</span>
                </div>
                <div className="flex items-center">
                    <div className="hidden md:flex md:items-center">
                        {token ? (
                            <button
                                type="button"
                                onClick={handleLogout}
                                className="ml-4 px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => navigate('/login')}
                                className="ml-4 px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                            >
                                Login
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={() => navigate('/registration')}
                            className="ml-4 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Sign Up
                        </button>
                    </div>
                    <button
                        type="button"
                        className="md:hidden ml-4 p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 rounded-lg"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                        <span className="sr-only">Open menu</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-100 py-2">
                    {token ? (
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                        >
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={() => navigate('/login')}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                        >
                            Login
                        </button>
                    )}

                    <button
                        onClick={() => navigate('/registration')}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
                    >
                        Sign Up
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
