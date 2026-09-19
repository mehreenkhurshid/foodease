import { FaSearch, FaStar } from "react-icons/fa";
import { useState } from "react";

export default function Menu() {
    const foods = [
        {
            id: 1,
            name: "Pepperoni Pizza",
            price: "PKR 1,299",
            image: "/images/pizza.jpg",
            category: "Pizza",
        },
        {
            id: 2,
            name: "Cheese Burger",
            price: "PKR 799",
            image: "/images/burger.jpg",
            category: "Burger",
        },
        {
            id: 3,
            name: "Chicken Biryani",
            price: "PKR 599",
            image: "/images/biryani.jpg",
            category: "Rice",
        },
        {
            id: 4,
            name: "Alfredo Pasta",
            price: "PKR 999",
            image: "/images/pasta.jpg",
            category: "Pasta",
        },
        {
            id: 5,
            name: "Club Sandwich",
            price: "PKR 699",
            image: "/images/sandwitch.jpg",
            category: "Sandwich",
        },
        {
            id: 6,
            name: "French Fries",
            price: "PKR 299",
            image: "/images/fries.jpg",
            category: "Snacks",
        },
        {
            id: 7,
            name: "Crispy Wings",
            price: "PKR 899",
            image: "/images/wings.jpg",
            category: "Chicken",
        },
        {
            id: 8,
            name: "Fresh Salad",
            price: "PKR 499",
            image: "/images/salad.jpg",
            category: "Healthy",
        },
        {
            id: 9,
            name: "Chocolate Shake",
            price: "PKR 399",
            image: "/images/shake.jpg",
            category: "Drinks",
        },
    ];

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredFoods = foods.filter((food) => {
        const matchesSearch = food.name
            .toLowerCase()
            .includes(searchTerm.toLowerCase());

        const matchesCategory =
            selectedCategory === "All" ||
            food.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">

            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                    Explore Our Menu
                </h1>

                <p className="text-gray-600 mt-3">
                    Discover delicious meals prepared with fresh ingredients.
                </p>

                <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded"></div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto mb-8">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                {/*<input*/}
                {/*    type="text"*/}
                {/*    placeholder="Search your favorite food..."*/}
                {/*    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"*/}
                {/*/>*/}

                <input
                    type="text"
                    placeholder="Search your favorite food..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
                <button
                    onClick={() => setSelectedCategory("All")}
                    className={`px-5 py-2 rounded-full font-medium transition ${
                        selectedCategory === "All"
                            ? "bg-orange-500 text-white"
                            : "bg-white shadow hover:bg-orange-100"
                    }`}
                >
                    All
                </button>

                <button
                    onClick={() => setSelectedCategory("Pizza")}
                    className={`px-5 py-2 rounded-full font-medium transition ${
                        selectedCategory === "Pizza"
                            ? "bg-orange-500 text-white"
                            : "bg-white shadow hover:bg-orange-100"
                    }`}
                >
                    Pizza
                </button>

                <button
                    onClick={() => setSelectedCategory("Burger")}
                    className={`px-5 py-2 rounded-full font-medium transition ${
                        selectedCategory === "Burger"
                            ? "bg-orange-500 text-white"
                            : "bg-white shadow hover:bg-orange-100"
                    }`}
                >
                    Burger
                </button>

                <button
                    onClick={() => setSelectedCategory("Pasta")}
                    className={`px-5 py-2 rounded-full font-medium transition ${
                        selectedCategory === "Pasta"
                            ? "bg-orange-500 text-white"
                            : "bg-white shadow hover:bg-orange-100"
                    }`}
                >
                    Pasta
                </button>

                <button
                    onClick={() => setSelectedCategory("Drinks")}
                    className={`px-5 py-2 rounded-full font-medium transition ${
                        selectedCategory === "Drinks"
                            ? "bg-orange-500 text-white"
                            : "bg-white shadow hover:bg-orange-100"
                    }`}
                >
                    Drinks
                </button>
            </div>

            {/* Food Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">



                {filteredFoods.length === 0 ? (
                    <div className="col-span-full text-center py-10">
                        <h3 className="text-xl font-semibold text-gray-600">
                            No food found 😔
                        </h3>
                    </div>
                ) : (
                    filteredFoods.map((food) => (
                        // card code

                        <div
                            key={food.id}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                        >
                            <img
                                src={food.image}
                                alt={food.name}
                                className="w-full h-56 object-cover transition duration-500 hover:scale-105"
                            />

                            <div className="p-5">

                            <span className="text-sm text-orange-500 font-medium">
                                {food.category}
                            </span>

                                <h2 className="text-xl font-bold text-gray-800 mt-1">
                                    {food.name}
                                </h2>

                                <div className="flex items-center gap-1 text-yellow-500 mt-2">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />

                                    <span className="text-gray-600 text-sm ml-2">
                                    4.8
                                </span>
                                </div>

                                <div className="flex justify-between items-center mt-4">

                                    <p className="text-orange-600 font-bold text-xl">
                                        {food.price}
                                    </p>

                                    <button className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                                        Add To Cart
                                    </button>

                                </div>

                            </div>
                        </div>

                    ))
                )}

            </div>

        </section>
    );
}