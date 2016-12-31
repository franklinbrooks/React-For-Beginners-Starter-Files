import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  constructor() {
    super();
    this.addFish = this.addFish.bind(this); // allows access to 'this' context App inside functions below
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    // getInitialState
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    // update state
    const fishes = {...this.state.fishes};  // ... = 'spread' in post-ES6
    // set state
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({ fishes: fishes });
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  addToOrder(key) {
    // take a copy of state
    const order = {...this.state.order};
    // update or add the new number of fish
    order[key] = order[key] + 1 || 1;
    // update state
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline='Fresh Seafood Market'/>
            <ul className='list-of-fishes'>
              {
                Object
                .keys(this.state.fishes)
                .map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />)
              }
            </ul>
        </div>
        <Order />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
      )
  }
}

export default App;
