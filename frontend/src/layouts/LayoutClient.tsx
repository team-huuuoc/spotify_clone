import React from 'react';
import Header from "@/components/header/Header";
import {Outlet} from "react-router-dom";
import Footer from "@/components/footer/Footer";

const LayoutClient = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default LayoutClient;
