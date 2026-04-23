import './App.css'
import { ItemCounter } from './shopping-cart/ItemCounter'

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  { productName: 'Nintendo Switch', quantity: 1 },
  { productName: 'Pro Controller', quantity: 5 },
  { productName: 'Super Smash', quantity: 3 }
]

function App() {

  return (
    <>
      <h1>Carrito de Compras</h1>

      {itemsInCart.map(({ productName, quantity }) => (<ItemCounter key={productName} name={productName} quantity={quantity} />))}
    </>
  )
}

export default App
