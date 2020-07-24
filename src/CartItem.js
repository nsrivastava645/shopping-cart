import React from 'react';

const CartItem = (props)=>{
     
    const{ product , onIncreaseButton, onDecreaseButton, onDeleteButton} = props;
    const { title, quantity, price, id, img} = product;
        return (
            
            <div className="cart-item">
                <div className="left-block">
                    <img src={img} alt="" style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25}}>{title}</div>
                    <div style={{ color: 'lightgrey'}}>Rs: {price}</div>
                    <div style={{ color: 'lightgrey'}}>Quantity: {quantity}</div>
                    <div className="cart-items-actions">
                        {/* Action buttons */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg"
                        onClick = {()=>onIncreaseButton(product)}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/659/659892.svg"
                        onClick={()=> onDecreaseButton(product)}
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1345/1345823.svg"
                        onClick = {()=> onDeleteButton(id)}
                        />
                    </div>
                </div>
            </div>



        );
    }



// styling
const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        backgroundColor: 'grey'
    }
}
export default CartItem;