import './App.css';

import React from 'react';
import { useEffect, useState } from 'react';

import { NavBar, Products } from './components';
import { commerce } from './lib/commerce';
import { iCart } from './models/cart.model';
import { iProduct } from './models/product.model';
import CartServiceProvider from './services/Cart/cart.service';


interface AppProps
{

}

export const App = (props: AppProps) =>
{

  const [products, setProducts] = useState<iProduct[]>([]);
  const [cart, setCart] = useState<iCart>();
  // const cart = useContext();

  const fetchProducts = async () =>
  {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () =>
  {

    setCart(await commerce.cart.retrieve());

  }

  useEffect(() =>
  {
    fetchProducts();
    fetchCart();
    return () =>
    {

    }
  }, [])

  console.log(products);
  console.log(cart);




  return (
    <>
      <CartServiceProvider>
        <div className="App">
          <NavBar />
          <Products products={products} />
        </div>
      </CartServiceProvider>
    </>
  );

}


export default App;
