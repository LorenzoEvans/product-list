import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductList';

class App extends Component {

  render() {
    return (
      <div className="ui unstackable items App">
      
      <ProductList />
        
      </div>
    );
  }

  }
  
  



ReactDOM.render(
  <App />, document.getElementById('content')
)
export default App;
