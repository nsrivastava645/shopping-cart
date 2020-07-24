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
class CART extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
                {
                    title: 'Commodity1 Name',
                    price: 9991,
                    quantity: 1,
                    img: '',
                    id: 1
                },
                {
                    title: 'Commodity2 Name',
                    price: 9992,
                    quantity: 1,
                    img: '',
                    id: 2,
                },
                {
                    title: 'Commodity3 Name',
                    price: 9993,
                    quantity: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }
    increaseQuantityHandler = (product) =>{
        // console.log('Increase Handler Called', product);
        let {products} = this.state;
        let indexOfThatProduct = products.indexOf(product);

        products[indexOfThatProduct].quantity += 1;
        //now render that again
        this.setState({
            products: products
        })
    }
    decreaseQuantityHandler = (product) =>{
        // console.log('Decrease button pressed for', product)
        let {products} = this.state;
        let indexOfThatProduct = products.indexOf(product);

        // decrease the state
        if(products[indexOfThatProduct].quantity===0){
            return;
        }else{
            products[indexOfThatProduct].quantity -=1;
            this.setState({
                products : products
            })
        }
        
    }
    deleteProductHandler = (id)=>{
        let {products}  = this.state;
        //filter the product with that given id
        
        let itemsToRetain = products.filter((product)=> product.id!==id)

        this.setState({
            products: itemsToRetain
        })
    }
      render() {
        const {products} = this.state;
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
                        onIncreaseButton = {this.increaseQuantityHandler}
                        onDecreaseButton = {this.decreaseQuantityHandler}
                        onDeleteButton = {this.deleteProductHandler}
                    />
                    );
                })}
            </div>
            );
    }

}




export default CART;