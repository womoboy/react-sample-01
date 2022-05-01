import ProductList from './components/productList/ProductList';
import { useState } from 'react';
import AddProduct from './components/addProduct/AddProduct';

const App = () => {
    const [products, setProducts] = useState([
        {id: 1, title: "Book 1"},
        {id: 2, title: "Book 2"},
        {id: 3, title: "Book 3"}
    ]);

    const productAddition = (title) => {
        const id = Math.floor(Math.random() * 1000);
        const newProduct = {id, ...title};
        setProducts([...products, newProduct]);
    }

    const deleteProduct = (id) => {
        setProducts(products.filter((product)=> product.id !== id));
    }

    return (
        <>
            <AddProduct onAdd={productAddition}/>
            <ProductList products={products} onDelete={deleteProduct} />
        </>
    )
}

export default App;