import { createContext, useContext, ReactNode, useState } from "react"

interface ShoppingCartProviderProps{
    children: ReactNode
}
interface ShoppingCartContextType{
    quantGet: (id: number) => number
    quantIncrease: (id: number) => void
    quantDescrease: (id: number) => void
    remove: (id: number) => void
}
interface CartItem{
    id: number
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContextType)

export const useShoppingCart = () => {
  return (
    useContext(ShoppingCartContext)
  )
}
export const ShoppingCartProvider = ({children}: ShoppingCartProviderProps) => {
  const [cartItem, setCartItems] = useState<CartItem[]>([])

  function getItemQuantity(id: number){
    //Caso o item com o id desejado exista, retorne a sua quantidade, caso contrário retorne 0
    return cartItem.find(item => item.id == id)?.quantity || 0   
  }
  function increaseItemQuantity(id: number){
    // A função em setCartItems retorna um objeto do tipo CartItem
    setCartItems(currItems => {
        //Caso o item com o id desejado não exista, o inclua
        if(currItems.find(item => item.id === id) == null){
            return [...currItems, {id, quantity:1}]
        }
        //Caso contrário percorra a lista de itens
        else{
            return currItems.map(item => {
                //Se o id do item for encontrado, o seu atributo quantidade é acrescido
                if (item.id === id){
                    return {...item, quantity: item.quantity+1}
                }
                //Caso contrário retorne o item
                else{
                    return item
                }
            })
        }

    })
  }
  function decreaseItemQuantity(id: number){
    // A função em setCartItems retorna um objeto do tipo CartItem
    setCartItems(currItems => {
        //Caso a quantidade do item desejado seja igaual a 1, o remova da lista
        if(currItems.find(item => item.id === id)?.quantity === 1){
            return currItems.filter(item => item.id !== id)
        }
        //Caso contrário percorra a lista de itens
        else{
            return currItems.map(item => {
                //Se o id do item for encontrado, o seu atributo quantidade é decrescido
                if (item.id === id){
                    return {...item, quantity: item.quantity-1}
                }
                //Caso contrário retorne o item
                else{
                    return item
                }
            })
        }

    })
  }
  function removeFromCart(id: number){
    //Remove o item correspondente ao id
    setCartItems(currItems => {
        return currItems.filter(item => item.id !== id)
    })
  }
  
    return (
    <ShoppingCartContext.Provider value = {{ quantGet: getItemQuantity, quantIncrease: increaseItemQuantity, quantDescrease: decreaseItemQuantity, remove: removeFromCart}}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

