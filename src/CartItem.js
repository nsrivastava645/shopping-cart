import React from 'react';

class CartItem extends React.Component {
   
    constructor(){
         // you need to call super constructor because react extends component class and its constructor needs calling
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            quantity: 1,
            img: '',
        }
    }
   
    increaseQuantity = ()=>{
        // this.state.quantity++;  but direct mutatio wont re rerender your app so use setState;
        this.setState({
            quantity: this.state.quantity+1
        })
        // console.log('Increase Quantity pressed, current state :', this.state );
        

    }
    decreaseQuantity = ()=>{
        //dont decrease below 0
        let {quantity}= this.state;
        if(quantity===0){
            return;
        }
        // setState function metod 2
        this.setState((prevState)=>{
            return {
                quantity : prevState.quantity-1,
            }
        })
    }
    
 

    render(){
        const {price, title, quantity} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img alt="" style={styles.image}/>
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
                        onClick = {this.increaseQuantity}
                        />
                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://image.flaticon.com/icons/svg/659/659892.svg"
                        onClick={this.decreaseQuantity}
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
export default CartItem;