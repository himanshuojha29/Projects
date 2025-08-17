import React, { useState, useEffect } from 'react'
import SideNav from '../Components/SideNav.jsx';
import { Outlet } from 'react-router-dom';

const SIDENAV_WIDTH = 100; // px

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [marginLeft, setMarginLeft] = useState(window.innerWidth > 768 ? (collapsed ? 80 : SIDENAV_WIDTH) : 0);

    useEffect(() => {
        const handleResize = () => {
            setMarginLeft(window.innerWidth > 768 ? (collapsed ? 80 : SIDENAV_WIDTH) : 0);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [collapsed]);

    return (
        <div className="bg-gray-100 min-h-screen flex">
            <SideNav collapsed={collapsed} setCollapsed={setCollapsed} />
            <div
                className="w-full transition-all duration-300"
                style={{ marginLeft }}
            >
                <Outlet />
            </div>
        </div>
    )
}

export default Home