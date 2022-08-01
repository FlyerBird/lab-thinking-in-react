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




  return (
    <div>
        <h1>IronStore</h1>
        <div>
          <SearchBar onSearch={handleSearch}/>
        </div>

        <div>
          <ProductTable/>
        </div>
      </div> 
  )
}
