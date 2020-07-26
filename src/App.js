import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [],
        loading: true,
    };
    this.db = firebase.firestore();
}
componentDidMount() {
  // Method 1 of fetching data from firebase
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     console.log(snapshot);

  //     snapshot.docs.map((doc)=>{
  //       console.log(doc.data());
  //     });

  //     const products = snapshot.docs.map((doc)=>{
  //       let data = doc.data();
  //       data['id'] = doc.id;
  //       return data;
  //     });
  //     this.setState({
  //       products,
  //       loading: false,
  //     })
  //   });

      this.db
        .collection('products')
        // .where('price','>=',8000) querying the db
        .onSnapshot((snapshot) => {
              console.log(snapshot);
        
              snapshot.docs.map((doc)=>{
                console.log(doc.data());
                return "";
              });
        
              const products = snapshot.docs.map((doc)=>{
                let data = doc.data();
                data['id'] = doc.id;
                return data;
              });
              this.setState({
                products,
                loading: false,
              })
            });

}
increaseQuantityHandler = (product) =>{
    // console.log('Increase Handler Called', product);
    let {products} = this.state;
    let indexOfThatProduct = products.indexOf(product);

    // products[indexOfThatProduct].quantity += 1;
    // //now render that again
    // this.setState({
    //     products: products
    // })
    //using firestore we will use firestores docRef and then update it with new quantity
    const docRef = this.db.collection('products').doc(products[indexOfThatProduct].id);
    docRef
      .update({
        quantity : products[indexOfThatProduct].quantity +1
      })
      .then(()=>{
        console.log('document updated sucessfully');
      })
      .catch((err)=>{
        console.log(err);
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
        let docRef = this.db.collection('products').doc(products[indexOfThatProduct].id);
        docRef
          .update({
            quantity: products[indexOfThatProduct].quantity - 1
          })
          .then(()=>{
            console.log('Document updated');
          })
          .catch((err)=>{
            console.log(err);
          })
    }
    
}
deleteProductHandler = (id)=>{

    let docRef = this.db.collection('products').doc(id);
    docRef
      .delete()
      .then(()=>{
        console.log('Document deleted');
      })
      .catch((err)=>{
        console.log(err);
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
addProduct = () => {
  this.db
    .collection('products')
    .add({
      img: 'https://images.unsplash.com/photo-1542280756-2992e05fef7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
      title: 'Laptop',
      price: 500,
      quantity: 1,
      
    }).then((docRef) =>{
      console.log(docRef);
    }).catch((err)=>{
      console.log(err);
    })
}
  render(){
    // console.log('render');
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        {/* <button onClick={this.addProduct} style={{padding: 20, fontSize:20}}>Add a product</button> */}
        <Cart 
          products = {products}
          onIncreaseButton = {this.increaseQuantityHandler}
          onDecreaseButton = {this.decreaseQuantityHandler}
          onDeleteButton = {this.deleteProductHandler}
        />
        {loading && <h3>Loading your cart items....</h3>}
        <div style={{fontSize: 20, padding: 10}}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
