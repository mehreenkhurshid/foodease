import { Link } from "react-router-dom";
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function CTA() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">

                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl p-8 md:p-14 text-center shadow-2xl">

                    <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                        Ready To Order Your Favorite Meal?
                    </h2>

                    <p className="text-white/90 mt-4 max-w-2xl mx-auto text-lg">
                        Download FoodEase today and enjoy fast delivery,
                        exclusive offers, and delicious meals from your
                        favorite restaurants.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">

                        <a
                            href="#"
                            className="flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                        >
                            <FaApple />
                            Download App
                        </a>

                        <a
                            href="#"
                            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold shadow hover:scale-105 transition"
                        >
                            <FaGooglePlay />
                            Google Play
                        </a>

                        <Link
                            to="/menu"
                            className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition"
                        >
                            Explore Menu
                        </Link>

                    </div>

                </div>

            </div>
        </section>
    );
}