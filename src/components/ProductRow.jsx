import React from 'react'

export default function ProductRow(props) {
  const { products: {price, name, inStock} } = props;
  
  const colorRed = {
    color: "red"
   };
   const stock = inStock ? <td>{name}</td> : <td style={colorRed}>{name}</td>

  return (
    <tr>
      <td>{stock}</td>
      <td>{price}</td>
    </tr>
  )
}
