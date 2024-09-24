import { useCallback, useEffect, useState } from 'react';
import './App.css';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import ProductModal from './components/ProductModal';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = useCallback(async() => {
    try 
    {
      const response = await axios(`${process.env.REACT_APP_API_URL}/products`)
      setProducts(response.data);
      setFilteredProducts(response.data)   // Initially display all products
    } 
    catch (error) 
    {
      console.error('Error fetching products:', error);
    }
    
  },[])

  useEffect(() => {
    fetchProducts()
  },[fetchProducts])

  const handleSearch = async(searchTerm) => {
    if(searchTerm)
    {
      try 
      {
        const response = await axios(`${process.env.REACT_APP_API_URL}/products/search/?name=${searchTerm}`)
        setFilteredProducts(response.data)

      }catch (error) 
      {
        console.error('Error searching products:', error);
      }
    }else
    {
      setFilteredProducts(products)
    }
  }

  const handleFilterByCategory = async(category) => {
    if (category) 
    {
      const response = await axios(`${process.env.REACT_APP_API_URL}/products/${category}`)
      setFilteredProducts(response.data)

    } else 
    {
      setFilteredProducts(products)
    }
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">ECommerce Store</h1>
      <SearchBar onSearch={handleSearch}/>
      <CategoryFilter onFilter={handleFilterByCategory}/>
      <ProductList products={filteredProducts} onProductSelect={setSelectedProduct}/>
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </div>
  );
}

export default App;
