// Import dependencies 
// stuff other people made
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Custom stuff
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

import Toggle from './Toggle.js'
import MyForm from './MyForm'
import Calculator from './Calculator'

class App extends Component {
  constructor(props) {
    super(props);
    this.products = props.products
    console.log(props.products)
  }
  render() {

    return(
      <Calculator />
    )

    return(
      <MyForm />
    )


    //Basic Render Component
    return(
      <Toggle />
    )

    //Actual Inventory App (the file is named after)
    return (
      <div className="app container">
        <SearchBar />
        <ProductTable products={this.products} />
      </div>
    );
  }
}

export default App;
