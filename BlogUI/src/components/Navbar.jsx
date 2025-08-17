import { Search, Menu } from "lucide-react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 shadow bg-white">
      <div className="flex items-center gap-2">
        <Menu className="w-6 h-6 md:hidden" />
        <h1 className="text-xl font-bold text-pink-600">MyBlog</h1>
      </div>
      <div className="hidden md:flex gap-6">
        <NavLink to="/" className="hover:text-pink-600">Home</NavLink>
        < NavLink to="/about" className="hover:text-pink-600">About</NavLink>
      </div>
      <Search className="w-5 h-5 cursor-pointer hover:text-pink-600" />
    </nav>
  );
}
