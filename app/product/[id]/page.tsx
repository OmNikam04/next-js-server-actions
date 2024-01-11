import React from 'react'
import { Product } from '@/app/page';

const ProductPage = async ({params}:any) => {
    const res = await fetch(
        `https://659eba6847ae28b0bd3692ce.mockapi.io/api/v1/products/${params.id}`,
        {
          cache: "no-cache",
        }
      );
      const product: Product = await res.json();
  return (
    <div className='flex flex-col justify-center items-center'>
        <p>Id: {product.id}</p>
        <p>Name: {product.product}</p>
        <p>Rs. {product.price}</p>
    </div>
  )
}

export default ProductPage