import ProductList from './Components/productList/ProductList';
import { useState } from 'react';

const App = () => {
    const [products, setProducts] = useState([
        {id: 1, title: "Book 1"},
        {id: 2, title: "Book 2"},
        {id: 3, title: "Book 3"},
    ]);

    const productDelete = (id) => {
        setProducts(products.filter((product)=> {return product.id !== id}))
    }

    return (
        <>
            <ProductList products={products} onDelete={productDelete} />
        </>
    )
}

export default App;