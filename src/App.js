import React from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import Data from './../menu-data.json';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.addToTotal = this.addToTotal.bind(this);
    this.state = {
      total: 0,
      order: []
    };
  }

    addItem(e) {
      console.log(e.target.id);

      const dishId = parseInt(e.target.id);
      const a = this.state.order;
      a.push(dishId);
      this.setState({order: a});
      this.addToTotal(dishId);
    }

    addToTotal(dishId) {
      Data.starters.map(dish => {
        if(dish.id == dishId) {
          const price = dish.price;
          const t = this.state.total + price;
          this.setState({total: t});
        }
      });
      Data.mains.map(dish => {
        if(dish.id == dishId) {
          const price = dish.price;
          const t = this.state.total + price;
          this.setState({total: t});
        }
      });
      Data.desserts.map(dish => {
        if(dish.id == dishId) {
          const price = dish.price;
          const t = this.state.total + price;
          this.setState({total: t});
        }
      });
    }

    render() {
        return (
          <div>
            <h1>Restaurant Test</h1>
            <Order order={this.state.order} total={this.state.total}/>
            <Menu addItem={this.addItem}/>
          </div>
        );
    }
}

render(<App />, document.getElementById('root'));
