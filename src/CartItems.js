import React from 'react';

class CartItems extends React.Component {
    
    render(){
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25}}>Phone</div>
                    <div style={{ color: 'lightgrey'}}>Rs 1000</div>
                    <div style={{ color: 'lightgrey'}}>Quantity: 1</div>
                    <div className="cart-items-actions">
                        {/* Action buttons */}
                    </div>
                </div>
            </div>



        );
    }

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
export default CartItems;