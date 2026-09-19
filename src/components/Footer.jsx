export default function Footer() {
    return (
        <footer className="bg-black text-white py-8 mt-10">
            <div className="max-w-7xl mx-auto text-center md:text-left px-6 grid md:grid-cols-3 gap-8">

                {/* Brand */}
                <div>
                    <h2 className="text-2xl font-bold text-orange-400">FoodEase</h2>
                    <p className="text-gray-300 mt-2 text-sm">
                        Delivering delicious meals to your doorstep with fast delivery and best quality.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
                    <ul className="space-y-0.5 text-md text-gray-300">
                        <li><a href="/" className="hover:text-orange-400">Home</a></li>
                        <li><a href="#features" className="hover:text-orange-400">Features</a></li>
                        <li><a href="#pricing" className="hover:text-orange-400">Pricing</a></li>
                        <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold text-lg mb-2">Contact</h3>
                    <p className="text-gray-300 text-sm">📍 Lahore, Pakistan</p>
                    <p className="text-gray-300 text-sm">📧 support@foodease.com</p>
                    <p className="text-gray-300 text-sm">📞 +92 333 1234567</p>
                </div>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
                © {new Date().getFullYear()} FoodEase. All rights reserved.
            </p>
        </footer>
    );
}
