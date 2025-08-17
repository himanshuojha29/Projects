import React from 'react'
import TopNav from '../Components/TopNav.jsx'
import Card from '../Components/Card.jsx'
import { videosData } from "../../Store/data.js";

const Hero = () => {
    return (
        <div>
            <TopNav />
            <div className="mt-16 px-2 sm:px-4 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {videosData.map((video) => (
                        <div key={video.id} className="w-full">
                            <Card video={video} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Hero