//import React from 'react'
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import {Search} from "./"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="min-w-[500px]">
        <div className="flex bg-purus text-white h-[60px]">
            <Link to={'/'}>
              <div className="flex items-center mr-7 ml-3 pt-2">
                  <img className="w-[75px] m-2" src={"/images/purusW.png"} />
              </div>
              </Link>
            <div className="flex grow items-center m-2 justify-items-center"><Search/></div>
            <Link to={'/cart'}>
              <div className="flex items-center ml-auto mr-2" >
                  <ShoppingCartIcon className="h-[40px] pt-2"/>
                  <div className="flex pr-3 pl-3">
                      <div className='font-bold mt-5 -ml-2 mr-2'> Carrinho </div>
                  </div>
              </div>
            </Link>  
        </div>
        <div className="flex bg-purus-light_blue text-white space-x-3 text-xs xl:text-sm p-2 pl-6">
        <div>Venda no Purus</div>
        <div>Mais Vendidos</div>
        <div>Ofertas do Dia</div>
        <div>Prime</div>
        <div>Livros</div>
      </div>
        

    </header>
    
  )
}
export default NavBar;
