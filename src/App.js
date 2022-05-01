import ProductList from './Components/productList/ProductList';
import { useState, useEffect } from 'react';
import AddProduct from './Components/addProduct/AddProduct';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const sendRequest = async () => {
            const response = await fetch('http://localhost:8000/products');
            const responseData = await response.json();
            setProducts(responseData);
        }
        sendRequest();
    }, [])

    const productAddition = async (title) => {
        const response = await fetch('http://localhost:8000/products', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(title),
        });
        
        const responseData = await response.json();

        setProducts([...products, responseData]);
    }

    const productDelete = async (id) => {
        await fetch(`http://localhost:8000/products/${id}`, {
            method: "DELETE"
        });

        setProducts(products.filter((product)=> product.id !== id))
    }

    return (
        <>
            <AddProduct onAdd={ productAddition }/>
            <ProductList products={products} onDelete={productDelete} />
        </>
    )
}

export default App;