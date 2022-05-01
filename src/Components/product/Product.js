import './Product.scss';

const Product = ({ product, onDelete }) => {
    return (
        <>
            <li className='product'>
                <p>this name is : {product.title}</p>
                <p>id is : {product.id}</p>
                <button onClick={ () => onDelete(product.id) }>Delete</button>
            </li>
        </>
    )
}

export default Product;