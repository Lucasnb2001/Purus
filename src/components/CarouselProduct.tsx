import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

interface CarouselProductProps{
  products: {
    name: string,
    price: number
  }[]
}

const CarouselProduct = ({products}: CarouselProductProps) => {
  //const name = ["No Plan B", "Guinnes Worls Records 2023", "Simple One Pan Wonders", "The Bullet that Missed", "Interesting Facts for Curious Minds", "It Starts With Us", "Space Boy", "Lessons in Chemistry", "2023 Guide to the Night Sky"]
  //const booksInfo = [{name: "No Plan B", price: 38}, {name: "Guinnes Worls Records 2023", price: 22}, {name: "Simple One Pan Wonders", price: 51}, {name: "The Bullet that Missed", price: 30}, {name: "Interesting Facts for Curious Minds", price: 16}, {name: "It Starts With Us", price: 29}, {name: "Space Boy", price: 37}, {name: "Lessons in Chemistry", price: 25}, {name: "2023 Guide to the Night Sky", price: 34}]
  const booksInfo = products

  return (
    <div className="bg-white m-3">
      <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <Swiper
        slidesPerView={6}
        spaceBetween={12}
        navigation={true}
        //modules={[Navigation]}
      >
        {Array.from({ length: 9 }, (_, i) => (
          <SwiperSlide key={i} className="p-6">
            <Link to={`/product/${i}`}>
              <img
                src={`../images/product_${i}_small.jpg`}
                alt="Carousel product"
              />
            </Link>
            <p>{booksInfo[i].name}</p>
            <p aria-hidden="true">
            <span className="a-price-symbol">R$</span>
            <span className="a-price-whole">{booksInfo[i].price}</span>
            </p>
            <button className="bg-purus-button rounded-xl px-2 pb-1 text-sm">
                Adicionar ao carrinho
            </button>

            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProduct;