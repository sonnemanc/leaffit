import React from 'react'
import { connect } from 'react-redux'
import CartItem from'./CartItem'
import { getCart } from '../actions/myCart.js'

class MyCart extends React.Component {

    componentDidMount() {
        this.props.getCart()
    }

    render() {
        return (
            <div className="MyCart">
              <>Inside My Cart</>
              <ul>
                  {this.props.cart.included && this.props.cart.included.map( (item, index) => (<li key={index}><CartItem props={item} /></li>))}
              </ul>
              <button>CheckOut</button>
              <button>Empty Cart</button>
             </div>
        )
    }
}

const mapStateToProps = ({ cart }) => {
    return {
        cart
    }
}

export default connect(mapStateToProps, { getCart }) (MyCart)