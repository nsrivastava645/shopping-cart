import React from 'react';

class CartItems extends React.Component {
   
    constructor(){
         // you need to call super constructor because t extends component class abd its constructor needs calling
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qantity: 1,
            img: '',
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = ()=>{
        console.log('this.state', this.state);
    }
    
    render(){
        const {price, title, qantity} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25}}>{title}</div>
                    <div style={{ color: 'lightgrey'}}>Rs: {price}</div>
                    <div style={{ color: 'lightgrey'}}>Quantity: {qantity}</div>
                    <div className="cart-items-actions">
                        {/* Action buttons */}
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/992/992651.svg"
                        onClick={this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/659/659892.svg"
                        />
                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/1345/1345823.svg"
                        />
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