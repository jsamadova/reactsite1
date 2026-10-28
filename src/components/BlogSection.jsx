import React from 'react'


import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import p4 from '../assets/p4.png'
import p5 from '../assets/p5.png'
import p6 from '../assets/p6.png'
import p7 from '../assets/p7.png'
import p8 from '../assets/p8.png'
import p9 from '../assets/p9.png'
import p10 from '../assets/p10.png'
import p11 from '../assets/p11.png'
import p12 from '../assets/p12.png'




const products = [
    { id: 1, name: "Men's Shirt", price: 75, image: p1 },
    { id: 2, name: "Men's Shirt", price: 80, image: p2 },
    { id: 3, name: "Women's Dress", price: 68, image: p3 },
    { id: 4, name: "Women's Dress", price: 70, image: p4 },
    { id: 5, name: "Women's Dress", price: 75, image: p5 },
    { id: 6, name: "Women's Dress", price: 58, image: p6 },
    { id: 7, name: "Men's Jacket", price: 120, image: p7 },
    { id: 8, name: "Men's T-Shirt", price: 35, image: p8 },
    { id: 9, name: "Women's Blouse", price: 49, image: p9 },
    { id: 10, name: "Women's Skirt", price: 42, image: p10 },
    { id: 11, name: "Men's Jeans", price: 65, image: p11 },
    { id: 12, name: "Women's Coat", price: 150, image: p12 },
];

function Blog() {
    return (

        <section className="max-w-7xl mx-auto px-8 py-16">
            <div className="text-center mb-16">
                <h2 className="font-serif font-bold text-5xl text-black">
                    Our <span className="text-[#fb4452]">products</span>
                </h2>
                <div className="w-20 h-1.5 bg-[#fb4452] mx-auto mt-4"></div>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <div key={product.id} className="group relative bg-white shadow-md p-3">
                        <div className="bg-slate-50 p-6">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-56 w-full object-contain group-hover:opacity-30 transition-opacity"
                            />

                            <div className="flex justify-between items-center mt-8 group-hover:opacity-40 transition-opacity">
                                <h3 className="font-bold text-lg">{product.name}</h3>
                                <span className="font-semibold text-[#052b3f]">${product.price}</span>
                            </div>
                        </div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button className="w-44 py-2.5 rounded-full bg-[#fb4452] text-white hover:bg-[#e03340] cursor-pointer">
                                Add To Cart
                            </button>
                            <button className="w-44 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 cursor-pointer">
                                Buy Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog