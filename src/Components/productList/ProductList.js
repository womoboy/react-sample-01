import Product from '../product/Product';
import './ProductList.scss';

const ProductList = ({ products, onDelete }) => {
    return (
        <> 
            <ul className='product-list'>
                {products.map((product) => <Product key={product.id} title={product.title} id={product.id} onDelete={onDelete} />)}
            </ul>
        </>
    )
}

export default ProductList;