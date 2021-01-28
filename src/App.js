import './App.css';

import { useEffect, useState } from 'react';

import { NavBar, Products } from './components';
import { commerce } from './lib/commerce';

function App() {
  const [products, setProducts] = useState([])

  const featchProducts = async () =>{
    const {data} = await commerce.products.list();
  }

useEffect(() => {
  featchProducts();
  return () => {
    
  }
}, [])

  return (
    <div className="App">
      <NavBar/>
      <Products/>
    </div>
  );
}

export default App;
