import Cart from './components/Cart.tsx';
import Checkout from './components/Checkout.tsx';
import Header from './components/Header.tsx';
import Meals from './components/Meals.tsx';
import { CartContextProvider } from './store/CartContext.tsx';
import { UserProgressContextProvider } from './store/UserProgressContext.tsx';

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
