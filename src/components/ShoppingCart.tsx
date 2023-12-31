//import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { removeFromCart, emptyCart } from "../redux/cartSlice";

interface produto{
  id: number,
  name: string,
  price: number,
  quantity: number
}

const Cart = () => {
  const products = useSelector((state: RootState) => state.cart.products);
  const subtotal = useSelector((state: RootState) =>
    state.cart.products.reduce(
      (subtotal: number, product: produto) => subtotal + product.price * product.quantity,
      0
    )
  );
  const dispatch = useDispatch();

  return (
    <div className="h-screen bg-purus-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          {/* Products */}
          <div className="col-span-6 bg-white">
            <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
            {products.map((product: produto) => {
              return (
                <div key={product.id}>
                  <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                    <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                      <div className="col-span-2">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="p-4 m-auto"
                            src={`../images/product_${product.id}_small.jpg`}
                            alt="Checkout product"
                          />
                        </Link>
                      </div>
                      <div className="col-span-6">
                        <div>
                          <button
                            className="text-sm xl:text-base font-semibold rounded text-blue-500 mt-2 mb-1 cursor-pointer"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            Excluir do carrinnho
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className="text-lg xl:text-xl mt-2 mr-4 font-semibold">
                        R${(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-lg xl:text-xl text-right mb-4 mr-4">
              Total ({products.length} itens):{" "}
              <span className="font-semibold">
                R${(subtotal)}
              </span>
            </div>
          </div>
          {/* Checkout */}
          <div className="col-span-2 bg-white rounded h-[250px] p-7">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Seu pedido se qualifica para{" "}
              <span className="font-bold">Entrega grátis</span>. 
            </div>
            <div className="text-base xl:text-lg mb-4">
              Total ({products.length} itens):{" "}
              <span className="font-semibold">
                R${(subtotal)}
              </span>
            </div>
            <Link to={`/Sucess`}>
              <button onClick={()=>dispatch(emptyCart())} className="btn">Finalizar compra</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart