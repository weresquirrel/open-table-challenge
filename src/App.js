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
      warning: {mainMust: true, seaStop: false, onePerCategory: false}
    };
  }

    addItem(e) {
      console.log(e.target.id);

      const dishId = parseInt(e.target.id);

      this.checkConditions();

      Data.starters.map(dish => {
        if(dish.id == dishId) {
          if(this.state.order.diner1.starters.length < 1 &&
            this.state.warning.seaStop == false) {
            const d = {id: dishId, name: dish.name, price: dish.price};
            const s = this.state.order.diner1.starters;
            s.push(d);
            this.checkConditions();
          }

          console.log(this.state);
        }
      });
      Data.mains.map(dish => {
        if(dish.id == dishId) {
          if (this.state.order.diner1.mains.length < 1 &&
            this.state.warning.seaStop == false) {
            const d = {id: dishId, name: dish.name, price: dish.price};
            const m = this.state.order.diner1.mains;
            m.push(d);
            this.checkConditions();
          }

          console.log(this.state);
        }
      });
      Data.desserts.map(dish => {
        if(dish.id == dishId) {
          if (this.state.order.diner1.desserts.length < 1) {
            const d = {id: dishId, name: dish.name, price: dish.price};
            const de = this.state.order.diner1.desserts;
            de.push(d);
          }

          console.log(this.state);
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
          this.checkConditions();
          break;
        case 'main':
          let newState2 = Object.assign({}, this.state);
          newState2.order.diner1.mains = [];
          this.setState(newState2);
          this.calculateTotal();
          this.checkConditions();
          break;
        case 'dessert':
          let newState3 = Object.assign({}, this.state);
          newState3.order.diner1.desserts = [];
          this.setState(newState3);
          this.calculateTotal();
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
      let newWarning = Object.assign({}, this.state.warning);

      // main must
      if (this.state.order.diner1.mains.length < 1) {
        newWarning.mainMust = true;
        // console.log('hello');
      } else {
        newWarning.mainMust = false;
        // console.log('Kitty');
      }

      // seaStop
      if ((this.state.order.diner1.starters.length > 0 && this.state.order.diner1.starters[0].id == 4) ||
        (this.state.order.diner1.mains.length > 0 && this.state.order.diner1.mains[0].id == 7)) {
        newWarning.seaStop = true;
      } else {
        newWarning.seaStop = false;
      }

      // 2 course at least
      // only one/category
      // cheescake

      this.setState({warning: newWarning});
    }

    render() {
        return (
          <div>
            <h1>Restaurant Test</h1>
            <Order order={this.state.order} total={this.state.total} warning={this.state.warning} removeItem={this.removeItem}/>
            <Menu addItem={this.addItem}/>
          </div>
        );
    }
}

render(<App />, document.getElementById('root'));
