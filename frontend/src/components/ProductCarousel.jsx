import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/projects/all');
        console.log(response.data, "productcarausal");

        // Check if response data is an array before setting state
        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("Expected an array but received:", response.data);
          setProducts([]); // Set to an empty array if data is not an array
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Set to an empty array in case of error
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto md:py-24 lg:py-12 text-center min-h-screen">
      <h2 className="text-center text-2xl font-bold bg-white text-black inline-block rounded-full px-8 py-2 mb-6 border border-gray-300 hover:bg-[#a7a7eb]">
        Our Featured Products
      </h2>
      <h1 className='text-4xl -tracking-normal capitalize font-bold text-black md:mb-12'>
        Let me know <span className="text-[#9595f1]">if you need</span> <br /> any other modifications!
      </h1>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mySwiper bg-gray-300 p-10 rounded-lg"
      >
        {Array.isArray(products) && products.map((product) => (
          <SwiperSlide key={product._id}>
            <div className="group card bg-[#192655] h-96 w-72 shadow-xl mx-auto relative overflow-hidden">
              <figure className='w-full h-64 py-2'>
                <img
                  className="w-[270px] h-full object-cover bg-[#4793AF]"
                  src={`data:image/jpeg;base64,${product.image}`}
                  alt={product.name}
                />
              </figure>
              <div className="absolute inset-0 flex flex-col text-center px-6 items-center justify-center bg-[#192655] bg-opacity-90 text-white transition-transform transform translate-y-full group-hover:translate-y-0">
                <h2 className="card-title text-white">
                  {product.name}
                </h2>
                <p className="line-clamp-10">{product.description}</p>
                <div className="card-actions justify-between w-full pt-5">
                  {
                    product.link ? (
                      <Link to={product.link} target="_blank" rel="noopener noreferrer" className="badge badge-outline">Demo</Link>
                    )
                      : (
                        <Link to={''} className="badge badge-outline">Soon</Link>
                      )
                  }
                  <Link to={`/products`} className="badge badge-outline">Details</Link>
                </div>
              </div>
              <div className="card-body absolute bottom-0 left-0 w-full bg-opacity-80 text-white transition-transform transform translate-y-0 group-hover:translate-y-full">
                <h2 className="card-title text-white">
                  {product.name}
                </h2>
                <div className="card-actions justify-between">
                  {
                    product.link ? (
                      <Link to={product.link} target="_blank" rel="noopener noreferrer" className="badge badge-outline">Demo</Link>
                    )
                      : (
                        <Link to={''} className="badge badge-outline">Soon</Link>
                      )
                  }
                  <Link to={`/products`} className="badge badge-outline">Details</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCarousel;
