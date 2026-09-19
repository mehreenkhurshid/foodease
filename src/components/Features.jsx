import { FaShippingFast, FaConciergeBell, FaDollarSign, FaLeaf } from "react-icons/fa";

export default function Features() {
    return (
        <section id="features" className="py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-extrabold text-gray-800">
                    Why Choose <span className="text-orange-600">FoodEase?</span>
                </h2>
                <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                    We bring you delicious meals with unmatched convenience, affordability, and care.
                </p>

                {/* Feature Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">

                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition transform">
                        <FaShippingFast className="text-orange-600 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
                        <p className="text-gray-600 text-sm">
                            Hot and fresh meals delivered to your doorstep within minutes.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition transform">
                        <FaConciergeBell className="text-orange-600 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Top Quality</h3>
                        <p className="text-gray-600 text-sm">
                            We partner with premium restaurants ensuring the best taste every time.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition transform">
                        <FaDollarSign className="text-orange-600 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Affordable</h3>
                        <p className="text-gray-600 text-sm">
                            Great meals at prices that don’t hurt your pocket.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition transform">
                        <FaLeaf className="text-orange-600 text-4xl mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh & Hygienic</h3>
                        <p className="text-gray-600 text-sm">
                            Cooked with the highest hygiene & fresh ingredients for a healthy lifestyle.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
