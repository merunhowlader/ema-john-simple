import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    const total=cart.reduce((total,prd)=>total+prd.price,0)
    
    let shipping=0;
    if(total>35){
        shipping=0;
    }
    else if(total>15){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;

    }

    const tax= total/10;

    const grandTotla=(total +shipping+Number(tax)).toFixed(2);
    const fomatNumber=num=>{
        const precision=num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order summary</h4>
            <p>items Order:{cart.length}</p>
            <p>product price:{fomatNumber(total)}</p>
            <p><small>shipping cost:{shipping}</small></p>
            <p>tax: {fomatNumber(tax)}</p>
            <p>Total price:{grandTotla}</p>
        </div>

    );
};

export default Cart;