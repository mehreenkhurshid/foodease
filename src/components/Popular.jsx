import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PopularDishes() {
    const foods = [
        {
            name: "Pepperoni Pizza",
            image: "/images/pizza.jpg",
        },
        {
            name: "Cheese Burger",
            image: "/images/burger.jpg",
        },
        {
            name: "Alfredo Pasta",
            image: "/images/pasta.jpg",
        },
        {
            name: "Chocolate Shake",
            image: "/images/shake.jpg",
        },
        {
            name: "French Fries",
            image: "/images/fries.jpg",
        },
        {
            name: "Chicken Biryani",
            image: "/images/biryani.jpg",
        },
        {
            name: "Fresh Salad",
            image: "/images/salad.jpg",
        },
        {
            name: "Club Sandwich",
            image: "/images/sandwitch.jpg",
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1024) {
                setItemsToShow(2);
            } else {
                setItemsToShow(4);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const nextSlide = () => {
        if (startIndex < foods.length - itemsToShow) {
            setStartIndex(startIndex + 1);
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    const visibleFoods = foods.slice(
        startIndex,
        startIndex + itemsToShow
    );

    return (
        <section className="max-w-7xl mx-auto px-6 py-10">

            {/* Heading */}
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">
                    Popular Dishes
                </h2>

                <Link
                    to="/menu"
                    className="text-orange-600 font-bold hover:text-orange-500"
                >
                    VIEW ALL
                </Link>
            </div>

            {/* Slider */}
            <div className="flex items-center gap-3">

                <button
                    onClick={prevSlide}
                    disabled={startIndex === 0}
                    className="p-3 rounded-full bg-white shadow hover:bg-orange-50 disabled:opacity-40"
                >
                    <FaChevronLeft className="text-orange-600" />
                </button>

                <div
                    className={`grid gap-6 flex-1 ${
                        itemsToShow === 1
                            ? "grid-cols-1"
                            : itemsToShow === 2
                                ? "grid-cols-2"
                                : "grid-cols-4"
                    }`}
                >
                    {visibleFoods.map((food, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 max-w-sm mx-auto w-full"
                        >
                            <div className="h-52 bg-orange-50">
                                <img
                                    src={food.image}
                                    alt={food.name}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-300"
                                />
                            </div>

                            <div className="p-4 text-center">
                                <h3 className="font-semibold text-orange-600">
                                    {food.name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    disabled={startIndex >= foods.length - itemsToShow}
                    className="p-3 rounded-full bg-white shadow hover:bg-orange-50 disabled:opacity-40"
                >
                    <FaChevronRight className="text-orange-600" />
                </button>

            </div>
        </section>
    );
}