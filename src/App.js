import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [
            {
                title: 'Smartphone',
                price: 78000,
                quantity: 1,
                img: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
                id: 1
            },
            {
                title: 'Watch',
                price: 18000,
                quantity: 1,
                img: 'https://images.unsplash.com/photo-1517502474097-f9b30659dadb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=282&q=80',
                id: 2,
            },
            {
                title: 'Laptop',
                price: 85000,
                quantity: 1,
                img: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
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
getCartCount = ()=>{
  let {products} = this.state;
  let count = 0;
  products.forEach((product)=>{
    count += product.quantity;
  });
  return count;
}
getCartTotal = ()=>{
  let { products } = this.state;
  let total = 0;
  products.forEach((product)=>{
    total += (product.price) * (product.quantity); 
  })
  return total;
}
  render(){
    const {products} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart 
          products = {products}
          onIncreaseButton = {this.increaseQuantityHandler}
          onDecreaseButton = {this.decreaseQuantityHandler}
          onDeleteButton = {this.deleteProductHandler}
        />
        <div style={{fontSize: 20, padding: 10}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
