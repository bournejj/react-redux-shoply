import React from 'react';
import { useSelector, shallowEqual } from "react-redux";
import {useParams, Link} from 'react-router-dom'

const ProductDetails = () => {
    const products = useSelector((store) => store.products);
    const info = Object.values(products)

    let { name } = useParams();

  

    var result = info.filter(obj => {
        return obj.name === name
      })

   
    console.log(result)

    return (
        <div>
            <h1>Product: {name}</h1>
            <h1>Description: {result[0].description}</h1>
            <h1>Price: {result[0].price}</h1>
            <Link to={`/`}>
             <h2>Back</h2>
              </Link>
            
        </div>
    )

}

export default ProductDetails