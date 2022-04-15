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
                  {this.props.cart && this.props.cart.map( (item, index) => (<li key={index}><CartItem props={item} /></li>))}
              </ul>
              <p>Tax: </p>
              <p>Shipping and Handling: </p>
              <p>Total :</p>
              <button>CheckOut</button>
             </div>
        )
    }
}

const mapStateToProps = ({ cart, plants, currentUser }) => {
    return {
        cart,
        plants,
        currentUser
    }
}

export default connect(mapStateToProps, { getCart }) (MyCart)