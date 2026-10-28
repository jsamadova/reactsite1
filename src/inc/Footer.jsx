
function Footer() {
    return (
        <footer className="w-full">
            <div className="bg-[#f8f8f8] px-6 py-16">
                <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">

                    <div>
                        <h2 className="mb-8 text-4xl font-bold text-black">
                            <img src="../src/assets/logo.png" className="w-50"></img>
                        </h2>

                        <p className="mb-7 text-base leading-8 text-black">
                            <span className="font-bold">ADDRESS:</span> 28 White tower,
                            Street Name New York City, USA
                        </p>

                        <p className="mb-7 text-base text-black">
                            <span className="font-bold">TELEPHONE:</span> +91 987 654 3210
                        </p>

                        <p className="text-base text-black">
                            <span className="font-bold">EMAIL:</span> yourmain@gmail.com
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-8 text-2xl font-bold text-black">MENU</h3>

                        <ul className="space-y-2 text-lg text-black">
                            <li><a href="#" className="hover:text-red-500">Home</a></li>
                            <li><a href="#" className="hover:text-red-500">About</a></li>
                            <li><a href="#" className="hover:text-red-500">Services</a></li>
                            <li><a href="#" className="hover:text-red-500">Testimonial</a></li>
                            <li><a href="#" className="hover:text-red-500">Blog</a></li>
                            <li><a href="#" className="hover:text-red-500">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-8 text-2xl font-bold text-black">ACCOUNT</h3>

                        <ul className="space-y-2 text-lg text-black">
                            <li><a href="#" className="hover:text-red-500">Account</a></li>
                            <li><a href="#" className="hover:text-red-500">Checkout</a></li>
                            <li><a href="#" className="hover:text-red-500">Login</a></li>
                            <li><a href="#" className="hover:text-red-500">Register</a></li>
                            <li><a href="#" className="hover:text-red-500">Shopping</a></li>
                            <li><a href="#" className="hover:text-red-500">Widget</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-8 text-2xl font-bold text-black">NEWSLETTER</h3>

                        <p className="mb-6 text-lg leading-7 text-black">
                            Subscribe by our newsletter and get update protidin.
                        </p>

                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="flex w-full"
                        >
                            <input
                                type="email"
                                placeholder="Enter Your Mail"
                                className=" flex-1 border border-gray-300 bg-white px-5 py-4 text-base outline-none focus:border-red-500"
                            />

                            <button
                                type="submit"
                                className="bg-[#ff414d] px-5 py-4 font-bold text-white transition hover:bg-black"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>
            </div>

            <div className="bg-[#222222] px-4 py-6 text-center text-base text-white">
                <p>
                    © 2021 All Rights Reserved By{' '}
                    <a href="#" className="text-[#ff414d] hover:text-white">
                        Free Html Templates
                    </a>
                </p>

                <p>
                    Distributed By{' '}
                    <a href="#" className="text-[#ff414d] hover:text-white">
                        ThemeWagon
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;