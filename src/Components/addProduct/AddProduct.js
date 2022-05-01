import './AddProduct.scss';
import { useState } from 'react';

const AddProduct = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const formSubmit = (event) => {
        event.preventDefault();
        onAdd({ title });
        setTitle('');
    }

    return (
        <>
            <form className="form" onSubmit={formSubmit} >
                <div>
                    <input
                    type="text"
                    id='title'
                    placeholder='enter the name'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <input id='submit' type="submit" />
                </div>
            </form>
        </>
    )
}

export default AddProduct;