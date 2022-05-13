import React from "react";
import {Routes, Route } from "react-router-dom";

// pages
const Homepage = React.lazy(() => import("../../pages/homepage"));
const Login = React.lazy(() => import("../../pages/login"));
const Registration = React.lazy(() => import("../../pages/registration"));
const NotFound = React.lazy(() => import("../../pages/notFound"));

const RouteSwitch = () => {
    return (
        <React.Suspense fallback={<div>Loading..</div>}>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </React.Suspense>

    )
};

export default RouteSwitch;