import React from 'react';
import ReactDOM from 'react-dom'
import './App.css'

class Product extends React.Component{
    render(){

        const productImg = this.props.productImageUrl ;
        return(

            <div className="item">
                <div className="image">
                    <img src='this.props.productImageUrl' alt=''/>
                </div>
                <div className='middle aligned content'>


                    <div className='description'>

                        <a>Fort Knight</a>
                        <p className='para'>Authentic renaissance actors, delivered in just two weeks.</p>
                    </div>
                    <div className='extra'>

                        <span> Submitted by:</span>
                        <img className='ui avatar image' src="https://raw.githubusercontent.com/QTD289/voting_app/master/public/images/avatars/daniel.jpg" />
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Product />, document.getElementById('content')
  )


export default Product 