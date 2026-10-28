import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import sliderBg from '../assets/slider-bg.jpg';
import './Slider.css';

function Slider() {
    return (
        <Swiper
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
        >

            <SwiperSlide>
                <div className="slider-content">
                    <img src={sliderBg} alt="Sale collection" />

                    <div className="slider-text">
                        <h1>
                            <span>Sale 20% Off</span>
                            <br />
                            On Everything
                        </h1>

                        <p>
                            Discover our latest collection and enjoy
                            amazing discounts on your favorite products.
                        </p>

                        <a href="/products" className="shop-btn">
                            Shop Now
                        </a>
                    </div>
                </div>
            </SwiperSlide>



            <SwiperSlide>
                <div className="slider-content">
                    <img src={sliderBg} alt="Sale collection" />

                    <div className="slider-text">
                        <h1>
                            <span>Sale 20% Off</span>
                            <br />
                            On Everything
                        </h1>

                        <p>
                            Discover our latest collection and enjoy
                            amazing discounts on your favorite products.
                        </p>

                        <a href="/products" className="shop-btn">
                            Shop Now
                        </a>
                    </div>
                </div>
            </SwiperSlide>



            <SwiperSlide>
                <div className="slider-content">
                    <img src={sliderBg} alt="Sale collection" />

                    <div className="slider-text">
                        <h1>
                            <span>Sale 20% Off</span>
                            <br />
                            On Everything
                        </h1>

                        <p>
                            Discover our latest collection and enjoy
                            amazing discounts on your favorite products.
                        </p>

                        <a href="/products" className="shop-btn">
                            Shop Now
                        </a>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    );
}

export default Slider;