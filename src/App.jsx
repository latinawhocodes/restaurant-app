import { Menu } from '../restaurant-app/src/Menu';
import { Cart } from './Cart';
import { Orders } from './Orders';
import { Order } from './Order';
import { Register } from './Register';
import { Login } from './Login';

export function App() {
  return (
    <>
      <header>
        <nav>
        </nav>
      </header>
      <main>
        <Orders />
        <Cart />
        <Menu />
        <Order />
        <Register />
        <Login />
      </main>
      <footer></footer>
    </>
  );
}