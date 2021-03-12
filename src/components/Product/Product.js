import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee ,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Product = (props) => {
    
    
    const { img, name, seller, price, stock,key } = props.Product;
    return (

        <div className='product'>

            <div>
                <img src={img} alt="" />
            </div>

            <div>
                
                <h4 className="product-name"> <Link to={'/product/'+key}>{name}</Link></h4>
                <br />
                <p>by:{seller}</p>
                <p>${price}</p>

                <p>Only  {stock} left in stock- Order soon</p>
                 {props.showAdddToCart&&
                     <button 
                     onClick={()=>props.handleAddproduct(props.Product)}
                     className="main-button"
                     >
                         <FontAwesomeIcon icon={faShoppingCart} />add to cart
                     </button>

                 }

            </div>
        </div>
    );
};

export default Product;