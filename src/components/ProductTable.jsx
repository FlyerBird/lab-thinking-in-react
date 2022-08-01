import React from 'react';
import ProducRow from './ProductRow';

export default function ProductTable(props) {
  const { products } = props;
  
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map(elem => {
          return <ProducRow key={elem.id} products={elem}/>
        })}
      </tbody>
    </table>
  )
}
