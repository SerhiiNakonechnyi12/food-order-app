import Cart from './components/Cart.js';
import Checkout from './components/Checkout.js';
import Header from './components/Header.tsx';
import Meals from './components/Meals.js';
import { CartContextProvider } from './store/CartContext.js';
import { UserProgressContextProvider } from './store/UserProgressContext.js';

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
