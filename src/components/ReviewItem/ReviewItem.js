import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name,quantity,key,price} = props.product;
    const reviewItemsStyle={
        borderBottom:'1px solid lightgray',
        marginBottom:'5px',
        paddingBottom:'5px',
        marginLeft:'200px'
    }

    return (
        <div style={reviewItemsStyle} className='review-item'>
            <h4>this is to review</h4>
            
            <p> {name} </p>
            <p>{quantity}</p>
            <p><small>${price}</small></p>
            <button className="main-button"
                onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;