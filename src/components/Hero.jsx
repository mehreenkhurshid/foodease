import { Link } from "react-router-dom";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute -left-40 -top-40 w-72 h-72 bg-gradient-to-br from-orange-300 to-yellow-300 rounded-full blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute -right-40 -bottom-28 w-96 h-96 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full blur-3xl opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
                {/* LEFT: Text / CTA */}
                <div className="space-y-6 z-10">
                    <p className="inline-block bg-white/30 backdrop-blur-sm text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                        New • Fast Delivery
                    </p>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
                        Get your favorite <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-400">meals delivered</span> <br />
                        in minutes with <span className="text-orange-600">FoodEase</span>.
                    </h1>

                    <p className="text-gray-700 max-w-xl">
                        Order from local restaurants, track your delivery live, and enjoy exclusive deals — all in one app. Fast, fresh and reliable.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <Link
                            to="/Menu"
                            className="inline-block px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-500 transition"
                        >
                            Order Now
                        </Link>
                    </div>

                </div>

                {/* RIGHT: Mockup + floating food items */}
                <div className="flex justify-center md:justify-end relative z-10">
                    <div className="relative w-full max-w-md">
                        {/* Curved card behind mockup for depth */}
                        <div className="absolute -left-6 -top-8 w-[220px] h-[200px] rounded-2xl bg-gradient-to-br from-orange-200 to-yellow-200 opacity-70 transform rotate-12 blur-sm hidden sm:block" />

                        {/* Main mockup image */}
                        <img
                            src="/images/mock.jpg"
                            alt="FoodEase app mockup"
                            className="relative rounded-2xl shadow-2xl w-full transform transition-transform duration-500 hover:scale-[1.02]"
                        />

                        {/* Floating food icons */}
                        <img
                            src="/images/burger.jpg"
                            alt="burger"
                            className="absolute -left-8 -top-6 w-16 h-16 rounded-full shadow-xl animate-bounce"
                            style={{ animationDuration: "2.6s" }}
                        />
                        <img
                            src="/images/fries.jpg"
                            alt="fries"
                            className="absolute -right-6 -top-10 w-12 h-12 rounded-full shadow-lg animate-bounce"
                            style={{ animationDuration: "2s" }}
                        />
                        <img
                            src="/images/drink.jpg"
                            alt="drink"
                            className="absolute -right-6 -bottom-6 w-14 h-14 rounded-full shadow-lg animate-bounce"
                            style={{ animationDuration: "2.8s" }}
                        />

                        <div className="absolute left-0 -bottom-6 w-28 h-14 rounded-xl bg-white/70 blur-sm hidden sm:block" />
                    </div>
                </div>
            </div>


            <div className="pointer-events-none">
                <svg
                    className="w-full -mt-4"
                    viewBox="0 0 1440 80"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,40 C120,80 360,0 720,40 C1080,80 1320,0 1440,40 L1440 80 L0 80 Z"
                        fill="url(#g)"
                        opacity="0.9"
                    />
                    <defs>
                        <linearGradient id="g" x1="0" x2="1">
                            <stop offset="0%" stopColor="#FDBA74" />
                            <stop offset="100%" stopColor="#FDE68A" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
}
