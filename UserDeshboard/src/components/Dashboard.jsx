import React, { useState } from "react";
import {
  Home,
  User,
  Settings,
  LogOut,
  Menu,
  X,
  BarChart,
  Bell,
} from "lucide-react";
import { Link, Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home";
import Profile from "../pages/Profile";
import Analytics from "../pages/Analytics";
import SettingsPage from "../pages/Settings";
import LogoutPage from "../pages/Logout";

export default function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform transform md:translate-x-0 
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">User Dashboard</h1>
          <button className="md:hidden" onClick={() => setOpen(false)}>
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <nav className="p-4 space-y-4">
          <Link
            to="/"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            <Home /> Home
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            <User /> Profile
          </Link>
          <Link
            to="/analytics"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            <BarChart /> Analytics
          </Link>
          <Link
            to="/settings"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
            onClick={() => setOpen(false)}
          >
            <Settings /> Settings
          </Link>
          <Link
            to="/logout"
            className="flex items-center gap-3 text-red-500 hover:text-red-600"
            onClick={() => setOpen(false)}
          >
            <LogOut /> Logout
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white shadow">
          <button className="md:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
          <h2 className="text-lg font-semibold">Welcome, Himanshu </h2>
          <Bell className="h-6 w-6 text-gray-600 cursor-pointer" />
        </div>

        {/* Routing Content */}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
