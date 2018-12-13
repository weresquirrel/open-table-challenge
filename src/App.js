import React from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import Data from './../menu-data.json';
import styles from "./App.css";
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
      diners: [
        {
          name: 'diner1',
          selected: true,
          order: {starters: [], mains: [], desserts: []}
        },
        {
          name: 'diner2',
          selected: false,
          order: {starters: [], mains: [], desserts: []}
        }
      ],
      warning: {mainMust: true, seaStop: false, minCourse: false}
    };
  }

    addItem(e) {
      const dishId = parseInt(e.target.id);
      this.checkConditions();
      let order = {};

      Data.starters.map(dish => {
        if(dish.id == dishId) {
          order = {
            category: 'starter',
            id: dishId,
            name: dish.name,
            price: dish.price};
        }
      });
      Data.mains.map(dish => {
        if(dish.id == dishId) {
          order = {
            category: 'main',
            id: dishId,
            name: dish.name,
            price: dish.price};
        }
      });
      Data.desserts.map(dish => {
        if(dish.id == dishId) {
          order = {
            category: 'dessert',
            id: dishId,
            name: dish.name,
            price: dish.price};
        }
      });
      this.state.diners.map(diner => {
        if(diner.selected == true) {
          switch (order.category) {
            case 'starter':
              if(diner.order.starters.length < 1
                // && (this.state.warning.seaStop == false || dishId !== 4)
              ){
                const d = {id: dishId, name: order.name, price: order.price};
                const s = diner.order.starters;
                s.push(d);
                this.checkConditions();
              }
              break;
            case 'main':
              if(diner.order.mains.length < 1
                // && (this.state.warning.seaStop == false || dishId !== 7)
              ){
                const d = {id: dishId, name: order.name, price: order.price};
                const m = diner.order.mains;
                m.push(d);
                this.checkConditions();
              }
              break;

            case 'dessert':
              if(diner.order.desserts.length < 1 ){
                const d = {id: dishId, name: order.name, price: order.price};
                const de = diner.order.desserts;
                de.push(d);
                this.checkConditions();
              }
              break;
          }
        }
      })
      this.calculateTotal();
    }

    removeItem(e) {
      const id = e.target.id;

      this.state.diners.map(diner => {
        if(id == `${diner.name}-starter`) {
          if(diner.selected == true) {
            let a = diner.order.starters;
            a.splice(0, 1);
            this.calculateTotal();
            // this.checkConditions();
          }
        } else if (id == `${diner.name}-main`) {
            if(diner.selected == true) {
              let a = diner.order.mains;
              a.splice(0, 1);
              this.calculateTotal();
              // this.checkConditions();
            }
        } else if (id == `${diner.name}-dessert`) {
            if(diner.selected == true) {
              let a = diner.order.desserts;
              a.splice(0, 1);
              this.calculateTotal();
              // this.checkConditions();
            }
        }
      });
    }

    calculateTotal() {
      let t = 0;
      this.state.diners.map(diner => {
        if(diner.order.starters[0]) {t = t + diner.order.starters[0].price};
        if(diner.order.mains[0]) {t = t + diner.order.mains[0].price};
        if(diner.order.desserts[0]) {t = t + diner.order.desserts[0].price};
      });
      this.setState({total: t});
    }

    checkConditions() {
      let newWarning = Object.assign({}, this.state.warning);

      // main must
      // if (this.state.order.diner1.mains.length < 1) {
      //   newWarning.mainMust = true;
      // } else {
      //   newWarning.mainMust = false;
      // }

      // seaStop
      // if ((this.state.order.diner1.starters.length > 0 && this.state.order.diner1.starters[0].id == 4) ||
      //   (this.state.order.diner1.mains.length > 0 && this.state.order.diner1.mains[0].id == 7)) {
      //   newWarning.seaStop = true;
      // } else {
      //   newWarning.seaStop = false;
      // }

      // 2 course at least
      // only one/category
      // cheescake

      this.setState({warning: newWarning});
    }

    render() {
        return (
          <div className={styles.app}>
            <h1>Restaurant Test</h1>
            <div className={styles.wrap}>
              <Menu addItem={this.addItem}/>
              <Order
                diners={this.state.diners}
                total={this.state.total}
                warning={this.state.warning}
                removeItem={this.removeItem}
              />
            </div>
          </div>
        );
    }
}

render(<App />, document.getElementById('root'));
