import React from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import Data from './../menu-data.json';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.checkConditions = this.checkConditions.bind(this);
    this.calculateTotal = this.calculateTotal.bind(this);
    this.state = {
      total: 0,
      order: {
        diner1: {starters: [], mains: [], desserts: []}
      },
      warning: {mainMust: false, pierre: false, onePerCategory: false}
    };
  }

    addItem(e) {
      console.log(e.target.id);

      const dishId = parseInt(e.target.id);

      // this.checkConditions();

      Data.starters.map(dish => {
        if(dish.id == dishId) {
          const d = {id: dishId, name: dish.name, price: dish.price};
          const s = this.state.order.diner1.starters;
          s.push(d);

          console.log(this.state);
        }
      });
      Data.mains.map(dish => {
        if(dish.id == dishId) {
          const d = {id: dishId, name: dish.name, price: dish.price};
          const m = this.state.order.diner1.mains;
          m.push(d);

          console.log(this.state);
        }
      });
      Data.desserts.map(dish => {
        if(dish.id == dishId) {
          const d = {id: dishId, name: dish.name, price: dish.price};
          const de = this.state.order.diner1.desserts;
          de.push(d);
        
          console.log(this.state.order);
        }
      });
      this.calculateTotal();
    }

    removeItem(e) {

      const category = e.target.id;
      switch (category) {
        case 'starter':
          let newState1 = Object.assign({}, this.state);
          newState1.order.diner1.starters = [];
          this.setState(newState1);
          this.calculateTotal();
          // console.log(this.state.order);
          break;
        case 'main':
          let newState2 = Object.assign({}, this.state);
          newState2.order.diner1.mains = [];
          this.setState(newState2);
          this.calculateTotal();
          // console.log(this.state.order);
          break;
        case 'dessert':
          let newState3 = Object.assign({}, this.state);
          newState3.order.diner1.desserts = [];
          this.setState(newState3);
          this.calculateTotal();
          // console.log(this.state.order);
          break;
      }
    }

    calculateTotal() {
      let t = 0;
      if(this.state.order.diner1.starters[0]) {t = t + this.state.order.diner1.starters[0].price};
      if(this.state.order.diner1.mains[0]) {t = t + this.state.order.diner1.mains[0].price};
      if(this.state.order.diner1.desserts[0]) {t = t + this.state.order.diner1.desserts[0].price};

      this.setState({total: t});
    }

    checkConditions() {
      // main must
      if (this.state.order.diner1.mains.length < 1) {
        const mainMustOn = {mainMust: true};
        this.setState({warning: mainMustOn});
      } else {
        const mainMustOff = {mainMust: false};
        this.setState({warning: mainMustOff});
      }

      // only one/category
      // Pierre
      // cheescake
    }

    render() {
        return (
          <div>
            <h1>Restaurant Test</h1>
            <Order order={this.state.order} total={this.state.total} removeItem={this.removeItem}/>
            <Menu addItem={this.addItem}/>
          </div>
        );
    }
}

render(<App />, document.getElementById('root'));
