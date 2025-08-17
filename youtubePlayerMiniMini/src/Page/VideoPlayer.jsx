import React, { useState } from "react";
import TopNav from "../Components/TopNav";
import { useParams, Link } from "react-router-dom";
import { videosData, comments } from "../../Store/data.js";
import Card from "../Components/Card.jsx";
import { FaThumbsUp, FaShare, FaRegCommentDots } from "react-icons/fa";

const VideoPlayer = () => {
  const { id } = useParams();
  const [commentInput, setCommentInput] = useState("");

  // Find the video by id
  const videoById = videosData.find((v) => String(v.id) === String(id));

  if (!videoById) {
    return (
      <div className="min-h-screen bg-gray-50">
        <TopNav />
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-200 mb-6 animate-pulse" />
          <h1 className="text-2xl font-semibold">Video not found</h1>
          <p className="text-gray-600 mt-2">
            The video you’re looking for doesn’t exist or was removed.
          </p>
          <Link
            to="/"
            className="inline-block mt-6 px-5 py-2.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopNav />

      <div className="max-w-[1400px] mx-auto px-3 sm:px-5 lg:px-8 py-4 lg:py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Player + details */}
          <div className="flex-1 min-w-0">
            {/* Video */}
            <div className="bg-black rounded-2xl overflow-hidden shadow-sm">
              {/* Responsive 16:9 wrapper without aspect plugin */}
              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={videoById?.video || "https://www.youtube.com/embed/lVzb6pmel_E"}
                  title={videoById?.title || "Video player"}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            </div>

            {/* Title */}
            <h1 className="mt-4 text-xl sm:text-2xl font-semibold leading-snug">
              {videoById?.title}
            </h1>

            {/* Channel row */}
            <div className="mt-3 bg-white rounded-2xl shadow p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                {/* Channel + meta */}
                <div className="flex items-start sm:items-center gap-3">
                  <img
                    src={videoById?.profileImg}
                    alt={videoById?.channel}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-semibold">{videoById?.channel}</div>
                      {videoById?.isVerified && (
                        <span className="inline-flex items-center text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500">
                      {videoById?.views} • {videoById?.uploadTime}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-medium transition">
                    <FaThumbsUp /> Like
                  </button>
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-sm font-medium transition">
                    <FaShare /> Share
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="mt-4">
                <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <p className="text-sm text-gray-700 whitespace-pre-line">
                    {videoById?.description || "No description available."}
                  </p>
                  {videoById?.tags?.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {videoById.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-full bg-blue-50 text-blue-700"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Comment input */}
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={videoById?.profileImg}
                    alt="you"
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <input
                    type="text"
                    className="flex-1 border border-gray-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500"
                    placeholder="Add a comment…"
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                  />
                  <button
                    disabled={!commentInput.trim()}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition
                    ${
                      commentInput.trim()
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Post
                  </button>
                </div>
              </div>

              {/* Comments (hidden on very small screens) */}
              <div className="mt-6">
                <div className="font-semibold mb-3 flex items-center gap-2">
                  <FaRegCommentDots /> Comments
                </div>

                <div className="space-y-5">
                  {comments.map((c) => (
                    <div key={c.id} className="flex gap-3">
                      <img
                        src={c.avatar}
                        alt={c.author}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          {c.author}{" "}
                          <span className="text-xs text-gray-400">• {c.time}</span>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{c.text}</p>
                        <button className="mt-2 inline-flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
                          <FaThumbsUp className="opacity-70" />
                          {c.likes}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Suggestions */}
          <aside className="w-full lg:w-[380px]">
            <div className="lg:sticky lg:top-20">
              <h2 className="text-base font-semibold mb-3 px-1">Up next</h2>

              <div className="grid grid-cols-1 gap-3">
                {videosData.map((video) => (
                  <Card key={video.id} video={video} />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
