import { FaStar } from "react-icons/fa";

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            name: "Sarah Ahmed",
            image: "/images/user2.jpg",
            review:
                "Food arrived hot and fresh. Delivery was super fast and the app is very easy to use.",
        },
        {
            id: 2,
            name: "Ali Khan",
            image: "/images/usee1.jpg",
            review:
                "Great variety of restaurants and amazing discounts. Highly recommended!",
        },
        {
            id: 3,
            name: "Ayesha Malik",
            image: "/images/user3.avif",
            review:
                "Smooth ordering experience and excellent customer support. My favorite food app.",
        },
    ];

    return (
        <section className="py-20 bg-white/40">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-extrabold text-gray-800">
                        What Our Customers Say
                    </h2>

                    <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                        Thousands of food lovers trust FoodEase every day for
                        fast delivery and delicious meals.
                    </p>

                    <div className="w-24 h-1 bg-orange-500 rounded mx-auto mt-4"></div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                        >
                            {/* User */}
                            <div className="flex flex-col items-center text-center">

                                <img
                                    src={review.image}
                                    alt={review.name}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-orange-100"
                                />

                                <h3 className="mt-4 text-xl font-bold text-gray-800">
                                    {review.name}
                                </h3>

                                {/* Rating */}
                                <div className="flex gap-1 text-yellow-500 mt-2">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>

                                {/* Review */}
                                <p className="text-gray-600 mt-4 leading-relaxed">
                                    "{review.review}"
                                </p>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}