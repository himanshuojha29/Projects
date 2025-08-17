import { NavLink } from "react-router";
import BlogCard from "../components/BlogCard";
// import Sidebar from "../components/Sidebar";
import Pagination from "../components/Pagination";
import { blogs } from "../damyData";

export default function Home() {

    return (
        <div className="min-h-screen w-full flex flex-col md:flex-row gap-6 p-6">
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogs.map((b, i) => (
                    <NavLink key={i} to={`/blob/${i}`}>
                        <BlogCard key={i} {...b} />
                    </NavLink>
                ))}

                {/* Pagination full row */}
                <div className="col-span-full">
                    <Pagination />
                </div>
            </div>

            {/* <Sidebar /> */}
        </div>

    );
}
