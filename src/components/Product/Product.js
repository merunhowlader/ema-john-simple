import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    console.log(props)
    const { img, name, seller, price, stock } = props.Product;
    return (

        <div className='product'>

            <div>
                <img src={img} alt="" />
            </div>

            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p>by:{seller}</p>
                <p>${price}</p>

                <p>Only  {stock} left in stock- Order soon</p>
                <button 
                onClick={()=>props.handleAddproduct(props.Product)}
                className="main-button"
                >
                    <FontAwesomeIcon icon={faShoppingCart} />add to cart
                    </button>

            </div>
        </div>
    );
};

export default Product;