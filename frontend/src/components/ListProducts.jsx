import { useContext, useEffect, useState } from 'react';
import Context from '../context/authContext';
import { Product } from './Product';
import './styles/ListProducts.css'

async function getProducts(id='') {  
  let products = await fetch(
    `http://localhost:3001/products/list/${id}`
  );
  products = await products.json();
  return products;
}
export function ListProducts() {
  const { userId } = useContext(Context); 
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(userId).then(res => setProducts(res)).catch(() => setProducts([]));
  }, [])

  return (
    <>
      <ul className='ctn-box'>
        {
          products.map(product => <Product key={product.id} {...product}></Product>)
        }
      </ul>
    </>
  )
}
