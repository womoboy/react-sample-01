import React from 'react';
import './AddProduct.scss';
import { useState } from 'react';

const AddProduct = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const formSubmit = (event) => {
        event.preventDefault();
        onAdd({title});
        setTitle('');
    }

    return (
        <>
            <form className="add-form" onSubmit={formSubmit}>
                <div>
                    <input 
                    id='title' 
                    type="text"
                    placeholder="enter the product name"
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    />
                </div>
                <div>
                    <input id='submit' type="submit" value="Add"/>
                </div>
            </form>
        </>
    )
}

export default AddProduct;