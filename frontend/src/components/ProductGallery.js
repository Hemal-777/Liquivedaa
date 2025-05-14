import React from 'react';
import './ProductGallery.css'; // Custom CSS for styling
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const products = [
  { image: 'Product 1.jpeg' },
  { image: 'Product 2.jpeg' },
  { image: 'Product 8.jpeg' },
  { image: 'Product 4.jpeg' },
  { image: 'Product 5.jpeg' },
  { image: 'Product 6.jpeg' },
  { image: 'Product 7.jpeg' },
];

const ProductGallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, // Auto scroll effect
    autoplaySpeed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200, // For large screens (laptops)
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992, // For medium screens (tablets)
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // For small screens (small tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576, // For extra small screens (mobile)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="product-gallery-container">

      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="gallery-item">
            <div className="product-card">
              <img
                src={require(`/public/images/${product.image}`)}
                className="product-image"
                alt={`Product ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} slick-next`} onClick={onClick}>
      {/* Right arrow icon or text */}
      &#x2192; {/* Right arrow symbol */}
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} slick-prev`} onClick={onClick}>
      {/* Left arrow icon or text */}
      &#x2190; {/* Left arrow symbol */}
    </div>
  );
};

export default ProductGallery;