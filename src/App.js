import ProductList from './components/productList/ProductList';
import { useState, useEffect } from 'react';
import AddProduct from './components/addProduct/AddProduct';

const App = () => {
    const [products, setProducts] = useState([]);

    //zamani ke component ejra shod boro va maghadir ro az server begir
    useEffect(()=>{
        const sendRequest = async () => {
            const response = await fetch('http://localhost:8000/products');
            const responseData = await response.json();
            setProducts(responseData);
        }
        sendRequest();
    }, [])

    //zamani ke form submit shod meghdar ro ezafe kon be list
    const productAddition = async (title) => {
        const response = await fetch('http://localhost:8000/products', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(title)
        });

        const responseData = await response.json();

        setProducts([...products, responseData]);
    }

    //hazf kon ba zadane dokmeye delete
    const deleteProduct = async (id) => {
        await fetch(`http://localhost:8000/products/${id}`, {
            method: "DELETE"
        })
        
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