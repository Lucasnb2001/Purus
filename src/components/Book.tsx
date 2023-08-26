import React from 'react'

interface BookProps{
    image: string;
    title: string;
    autor: string;
    capeType: string;
    price: number;
}

const Book: React.FC<BookProps> = ({image, title, autor, capeType, price}) => {
  return (
    <div className='bg-white'>
        <img src={image}></img>
        <h3>{title}</h3>
        <p>{autor}</p>
        <p>{capeType}</p>
        <span aria-hidden="true">
          <span className="a-price-symbol">R$</span>
          <span className="a-price-whole">{price}</span>
        </span>
    </div>
  )
}
export default Book