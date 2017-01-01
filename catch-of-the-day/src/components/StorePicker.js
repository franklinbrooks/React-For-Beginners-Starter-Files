import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
/*  constructor() {
    super();
    this.goToStore = this.goToStore.bind(this);
  }*/
  goToStore(event) {
      // first grab text from box
      // second transition from store to :storeId
      // console.log('You changed the URL');
      event.preventDefault();  // stops form from submitting
      const storeId = this.storeInput.value;
      // console.log(`Going to ${storeId}`);
      this.context.router.transitionTo(`/store/${storeId}`);

}
  render() {
    // Regular JS comments work here
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        {/* Inside JSX, comments must go in curly braces with CSS open/close */ }
        <h2>Please select a store</h2>
        <input type='text' required placeholder='Store Name' defaultValue={getFunName()}
        ref={(input) => {this.storeInput = input}} />
        <button type='submit'>Visit Store</button>
      </form>
      )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
