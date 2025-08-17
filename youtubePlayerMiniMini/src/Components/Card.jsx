import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ video }) => {
    return (
        <Link to={`/video/${video.id}`} className="bg-white rounded-lg shadow-xl overflow-hidden min-w-[20vw] max-w-xs w-full">
            <div className='relative'>
                <img
                    src={video.thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-40 object-cover hover:scale-103 transition-transform duration-300 rounded-t-md"
                />
            </div>
            {/* Info */}
            <div className="flex p-3">
                <div className='w-10 h-10'>

                    <img
                        src={video.profileImg}
                        alt="Channel profile"
                        className="w-full h-full rounded-full mr-3"
                    />
                </div>
                <div>
                    <h3 className="ml-3 font-semibold text-base">{video.title}</h3>
                    <p className="text-sm text-gray-600">{video.channel}</p>
                    <div className="text-xs text-gray-500 flex gap-2">
                        <span>{video.views}</span>
                        <span>•</span>
                        <span>{video.uploadTime}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
};

export default Card;