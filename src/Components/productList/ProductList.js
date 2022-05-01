import Product from '../product/Product';
import './ProductList.scss';

const ProductList = ({ products, onDelete }) => {
    return (
        <>
            <ul className='productList'>
                {products.map((product)=>{return <Product key={product.id} product={product} onDelete={onDelete} />})}
            </ul>
        </>
    )
}

export default ProductList;