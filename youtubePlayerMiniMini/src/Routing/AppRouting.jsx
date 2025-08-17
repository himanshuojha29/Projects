import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import Home from '../Page/Home.jsx';
import Trending from '../Page/Trending.jsx';
import Subscription from '../Page/Subscription.jsx';
import Hero from '../Page/Hero.jsx';
import VideoPlayer from '../Page/VideoPlayer.jsx';
import NotFound from '../Page/NotFound.jsx';
const AppRouting = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                { index: true, element: <Hero /> },
                { path: '/trending', element: <Trending /> },
                { path: '/subscription', element: <Subscription /> },
            ]
        },
        {
            path: 'video/:id',
            element: <VideoPlayer />
        },
        {
            path: '*',
            element: <NotFound />
        },
    ]);
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouting