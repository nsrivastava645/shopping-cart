import React from 'react';
import CartItem from './CartItem';

//props are like function arguments and are used to render different elements.
//props are passed from upper layer to lower layer so  that required elements can be rendered.
//we pass the attributes or say properties specific to one element and it takes up the value from props passed to it when it was called
//like render(){ return (
    // <div> <NameOfItemToRender prop1 ={value} prop2={value}... and so on</div>
// )}
// this can be grabbed in the NameOfItemToRender file as const{prop1, prop2, ....} = this.props and use themm directly
// 
const Cart = (props) => {
    

    const {products} = props;
    return (
        <div className="cart"> 
        
            {products.map((product) => {
                //in cartitem grab this using props.product
                //product id is just for internal react to differentiate between all the cartItems
                //pass the increase and decrease handlers as well
                return (
                <CartItem 
                    product = {product} 
                    key={product.id} 
                    onIncreaseButton = {props.onIncreaseButton}
                    onDecreaseButton = {props.onDecreaseButton}
                    onDeleteButton = {props.onDeleteButton}
                />
                );
            })}
        </div>
        );
}





export default Cart;