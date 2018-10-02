import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';

class ProductList extends React.Component {
    constructor(){
        super();
        
        this.state = {
           
          Seed: () => {
              return Math.floor((Math.random() * 50) + 15);
            },
    
          products: [
            //   {
            //     id: 1,
            //     title: 'Yellow Pail',
            //     description: 'On-demand sand castle construction expertise.',
            //     url: '#',
            //     votes: this.Seed ,
            //     submitterAvatarUrl: 'images/avatars/daniel.jpg',
            //     productImageUrl: 'C:\Users\loren\Desktop\LSP\product-list\src\images\products\image-aqua.png',
            //   },
            //   {
            //     id: 2,
            //     title: 'Supermajority: The Fantasy Congress League',
            //     description: 'Earn points when your favorite politicians pass legislation.',
            //     url: '#',
            //     votes: this.Seed,
            //     submitterAvatarUrl: 'images/avatars/kristy.png',
            //     productImageUrl: 'images/products/image-rose.png',
            //   },
            //   {
            //     id: 3,
            //     title: 'Tinfoild: Tailored tinfoil hats',
            //     description: 'We already have your measurements and shipping address.',
            //     url: '#',
            //     votes: this.Seed,
            //     submitterAvatarUrl: 'images/avatars/veronika.jpg',
            //     productImageUrl: 'images/products/image-steel.png',
            //   },
            //   {
            //     id: 4,
            //     title: 'Haught or Naught',
            //     description: 'High-minded or absent-minded? You decide.',
            //     url: '#',
            //     votes: this.Seed,
            //     submitterAvatarUrl: 'images/avatars/molly.png',
            //     productImageUrl: 'images/products/image-yellow.png',
            //   },
            ],
          
          }
        }



        
    render(){
        const product = this.props.products
        return(

            <div className="ui unstackable items">
                <Product product={this.state.products}
                        id={this.state.products.id}
                        title={this.state.products.title}
                        description={this.state.products.description}
                        url={this.state.products.url}
                        votes={this.state.products.votes}
                        submitterAvatarUrl={this.state.products.submitterAvatarUrl}
                        productImageUrl={this.state.products.productImageUrl}
                
                
                 />
            </div>
        )
    }
}

ReactDOM.render(
    <ProductList />, document.getElementById('content')
  )
export default ProductList