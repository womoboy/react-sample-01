import "./Product.scss";

const Product = ({ title, id, onDelete }) => {
  return (
    <>
      <li className="product">
        <p>title is : {title}</p>
        <p>id is : {id}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    </>
  );
};

export default Product;
