import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default function ProductPage() {
    const [products, setProducts] = useState(jsonData);

    const handleSearch = (searchValue) => {
      if (searchValue === "") {
        setProducts(jsonData);
      } else {
        const filtered = products.filter(elem => elem.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
        setProducts(filtered)
      }
    }

    const handleCheckProductInStock = (e) => {
      if (e.target.checked === true) {
        const filtered = products.filter(elem => elem.inStock);
        setProducts(filtered)
      } else {
        setProducts(jsonData);
      }
    }




  return (
    <div>
        <h1>IronStore</h1>
        <div>
          <SearchBar onSearch={handleSearch} />
          <p><input type="checkbox" onChange={handleCheckProductInStock} />  Only show products in stock</p>
        </div>

        <div>
          <ProductTable products={products}/>
        </div>
      </div> 
  )
}
