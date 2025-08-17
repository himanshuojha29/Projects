import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaFire, FaRegPlayCircle, FaBars } from "react-icons/fa";

export default function Sidebar({getWidth}) {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const navItems = [
        { to: "/", icon: <FaHome />, label: "Home" },
        { to: "/trending", icon: <FaFire />, label: "Trending" },
        { to: "/subscription", icon: <FaRegPlayCircle />, label: "Subscriptions" },
    ];

    return (
        <>
            {/* Mobile overlay */}
            <div
                onClick={() => setMobileOpen(false)}
                className={`fixed inset-0 bg-black/50 z-40 md:hidden ${mobileOpen ? "block" : "hidden"
                    }`}
            />

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-white border-r border-gray-200 flex flex-col
        transition-all duration-300 z-50
        ${collapsed ? "w-20" : "w-60"}
        ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
            >

                {/* Header */}
                <div className="flex items-center p-4 border-b border-gray-200">
                    <button
                        onClick={() =>
                            window.innerWidth < 768
                                ? setMobileOpen(false)
                                : setCollapsed(!collapsed)
                        }
                        className="text-xl"
                    >
                        <FaBars />
                    </button>
                    {!collapsed && (
                        <span className="ml-3 font-bold text-lg">MyTube</span>
                    )}
                </div>

                {/* Nav */}
                <nav className="flex flex-col mt-4 space-y-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="flex items-center px-4 py-2 hover:bg-gray-100 transition-colors"
                            onClick={() => setMobileOpen(false)}
                        >
                            <span className="text-lg">{item.icon}</span>
                            {!collapsed && (
                                <span className="ml-4 text-sm font-medium">{item.label}</span>
                            )}
                        </Link>
                    ))}
                </nav>
            </aside>

            {/* Mobile menu button (top-left corner) */}
            <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
            >

                <FaBars />
            </button>
        </>
    );
}
