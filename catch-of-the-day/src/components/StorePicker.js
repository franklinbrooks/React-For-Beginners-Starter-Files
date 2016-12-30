import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    // Regular JS comments work here
    return (
      <form className="store-selector">
        {/* Inside JSX, comments must go in curly braces with CSS open/close */ }
        <h2>Please select a store</h2>
        <input type='text' required placeholder='Store Name' defaultValue={getFunName()}/>
        <button type='submit'>Visit Store</button>
      </form>
      )
  }
}

export default StorePicker;
