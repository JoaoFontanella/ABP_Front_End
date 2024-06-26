import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Criar_conta from './Criar_conta';
import Cart from './Cart';
import CartProvider from './CartContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Createaccount',
    element: <Criar_conta />,
  },
  {
    path: '/Cart',
    element: <Cart />,
  },
  {
    path: '/Checkout',
    element: <Checkout />,
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;