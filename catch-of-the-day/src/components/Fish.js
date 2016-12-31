import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  render() {
    const {details} = this.props; // data massage to use ES6
    return (
      <li className='menu-fish'>
      <img src={details.image} alt={details.name} />
        {this.props.details.name}
      <h3 className='fish-name'>
        {details.name}
        <span className='price'>
        {formatPrice(details.price)}
        </span>
      </h3>
      <p>
        {details.desc}
      </p>
      <button>Add to order</button>
      </li>
    )
  }
}

export default Fish;