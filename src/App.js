// Import dependencies 
// stuff other people made
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Custom stuff
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

import Toggle from './Toggle.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.products = props.products
    console.log(props.products)
  }
  render() {

    return(
      <Toggle />
    )

    return (
      <div className="app container">
        <SearchBar />
        <ProductTable products={this.products} />
      </div>
    );
  }
}

export default App;
