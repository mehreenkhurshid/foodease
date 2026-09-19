import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Features from "./components/Features";
import Menu from "./components/Menu.jsx";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { FaHome, FaStar } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import Popular from "./components/Popular.jsx";
import ScrollToTop from "./components/ScrollToTop";
import { HashLink } from "react-router-hash-link";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">

                <header className="bg-white/70 backdrop-blur-md shadow sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 py-4">

                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                            {/* Logo */}
                            <div className="flex items-center gap-2">

                                <button
                                    onClick={() => setIsOpen(true)}
                                    className="text-2xl text-orange-600 hover:text-orange-500"
                                >
                                    <RiMenu3Line />
                                </button>


                                <img
                                    src="/images/pngtree-cooking-logo-png-image_6089722.png"
                                    alt="FoodEase"
                                    className="w-10 h-10"
                                />

                                <h1 className="text-3xl font-extrabold tracking-tight">
                                    <span className="text-orange-600">Food</span>
                                    <span className="text-yellow-500">Ease</span>
                                </h1>
                            </div>

                            {/* Right Side */}
                            <nav className="flex items-center gap-3 flex-wrap justify-center">

                                <button className="relative p-3 rounded-full bg-orange-100 hover:bg-orange-200 transition">
                                    <BsCart3 />
                                    <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        2
                    </span>
                                </button>

                                <button className="px-4 py-2 border border-orange-500 text-orange-600 rounded-lg hover:bg-orange-50 transition">
                                    Login
                                </button>

                                <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition shadow">
                                    Sign Up
                                </button>

                            </nav>

                        </div>

                    </div>
                </header>

                {/* Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {/* Sidebar */}
                <div
                    className={`fixed top-0 left-0 h-full w-72 bg-white shadow-xl z-50 transform transition-transform duration-300 ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="flex justify-between items-center p-5 border-b">
                        <h2 className="text-2xl font-bold text-orange-600">
                            FoodEase
                        </h2>

                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-xl"
                        >
                            <FaTimes />
                        </button>
                    </div>




                        <div className="p-5 space-y-6">

                            <div>

                                <ul className="space-y-5 font-semibold">

                                    <li>
                                        <Link
                                            to="/"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 hover:text-orange-500"
                                        >
                                            <FaHome />
                                            Home
                                        </Link>
                                    </li>

                                    <li>
                                        <Link
                                            to="/menu"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 hover:text-orange-500"
                                        >
                                            <MdRestaurantMenu />
                                            Explore Menu
                                        </Link>
                                    </li>

                                    <li>

                                        <HashLink
                                            smooth
                                            to="/#features"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 hover:text-orange-500"
                                        >
                                            <FaStar />
                                            Why Choose Us
                                        </HashLink>
                                    </li>

                                </ul>
                            </div>

                        </div>


                </div>




                <main className="flex-grow">
                    <Routes>

                        <Route
                            path="/"
                            element={
                                <>
                                    <Hero />
                                    <Popular />
                                    <Features />
                                    <Testimonials />
                                    <CTA />
                                </>
                            }
                        />

                        <Route path="/menu" element={<Menu />} />


                    </Routes>
                </main>

               <Footer/>

            </div>
        </Router>
    );
}
