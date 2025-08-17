import React from "react";
import { FaBars, FaSearch, FaVideo, FaBell } from "react-icons/fa";

export default function TopNav({ onMenuClick }) {
    return (
        <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200/50 h-15 flex items-center justify-between px-4 md:px-6 z-40 mb-16">
            {/* Left Section */}
            <div className="flex items-center space-x-4">
                <button
                    className="text-xl p-2 rounded-full hover:bg-gray-100"
                    onClick={onMenuClick}
                >
                    <FaBars />
                </button>
                <div className="flex items-center space-x-1 cursor-pointer">
                    <img
                        src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNvbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Logo"
                        className="h-5"
                    />
                    <span className="font-bold text-lg hidden sm:inline">MyTube</span>
                </div>
            </div>

            {/* Center Section (Search) */}
            <div className="flex-1 flex justify-center px-4">
                <div className="hidden sm:flex w-full max-w-xl">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-1 border border-gray-300 rounded-l-full px-4 py-1 text-sm focus:outline-none focus:border-blue-500"
                    />
                    <button className="bg-gray-100 border border-gray-300 rounded-r-full px-4 flex items-center justify-center hover:bg-gray-200">
                        <FaSearch className="text-gray-600" />
                    </button>
                </div>
                <button className="sm:hidden p-2 rounded-full hover:bg-gray-100">
                    <FaSearch />
                </button>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-100">
                    <FaVideo />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100 relative">
                    <FaBell />
                    <span className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded-full">
                        3
                    </span>
                </button>
                <img
                    src="https://images.unsplash.com/photo-1742201835839-33a959b5d97e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full cursor-pointer"
                />
            </div>
        </header>
    );
}
