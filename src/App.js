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
    this.changeSelected = this.changeSelected.bind(this);
    this.checkConditions = this.checkConditions.bind(this);

    this.calculateTotal = this.calculateTotal.bind(this);
    this.state = {
      total: 0,
      diners: [
        {
          name: 'diner1',
          order: {starters: [], mains: [], desserts: []}
        },
        {
          name: 'diner2',
          order: {starters: [], mains: [], desserts: []}
        }
      ],
      selectedDiner: 'diner1',
      warning: {mainMust: true, seaStop: false, minCourseForAll: false, dessertMissing: false}
    };
  }

    addItem(e) {
      const dishId = parseInt(e.target.id);
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
        if(this.state.selectedDiner == diner.name) {
          switch (order.category) {
            case 'starter':
              if(diner.order.starters.length < 1
                && (this.state.warning.seaStop == false || dishId !== 4)
              ){
                const d = {id: dishId, name: order.name, price: order.price};
                const s = diner.order.starters;
                s.push(d);
                this.checkConditions();
              }
              break;
            case 'main':
              if(diner.order.mains.length < 1
                && (this.state.warning.seaStop == false || dishId !== 7)
              ){
                const d = {id: dishId, name: order.name, price: order.price};
                const m = diner.order.mains;
                m.push(d);
                this.checkConditions();
              }
              break;

            case 'dessert':
              if(diner.order.desserts.length < 1 &&
                (this.state.warning.dessertMissing == false || dishId !== 11)){
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
          if(this.state.selectedDiner == diner.name) {
            let a = diner.order.starters;
            a.splice(0, 1);
            this.calculateTotal();
            this.checkConditions();
          }
        } else if (id == `${diner.name}-main`) {
            if(this.state.selectedDiner == diner.name) {
              let a = diner.order.mains;
              a.splice(0, 1);
              this.calculateTotal();
              this.checkConditions();
            }
        } else if (id == `${diner.name}-dessert`) {
            if(this.state.selectedDiner == diner.name) {
              let a = diner.order.desserts;
              a.splice(0, 1);
              this.calculateTotal();
              this.checkConditions();
            }
        }
      });
    }

    changeSelected(e) {
      const focusedDiner = e.target.value;
      this.setState({selectedDiner: focusedDiner});
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
      const minCourse = 2;
      const lastDessert = 11;

      // main must
      let dinersWithMain = 0;

      this.state.diners.map(diner => {
        if(diner.order.mains.length > 0) {
          dinersWithMain = dinersWithMain + 1;
        }
      });

      if(dinersWithMain == this.state.diners.length) {
        newWarning.mainMust = false;
      } else {
        newWarning.mainMust = true;
      }

      // seaStop
      let presentSeafoods = 0;

      this.state.diners.map(diner => {
        if((diner.order.starters.length > 0 && diner.order.starters[0].id == 4) ||
          ((diner.order.mains.length > 0 && diner.order.mains[0].id == 7))) {
            presentSeafoods = presentSeafoods + 1;
        }
      });

      if(presentSeafoods > 0) {
        newWarning.seaStop = true;
      } else {
        newWarning.seaStop = false;
      }

      // 2 course at least
      let dinersWithEnoughFood = 0;

      this.state.diners.map(diner => {
        let presentCategories = 0;

        if(diner.order.starters.length > 0) {
          presentCategories = presentCategories + 1;
        }
        if(diner.order.mains.length > 0) {
          presentCategories = presentCategories + 1;
        }
        if(diner.order.desserts.length > 0) {
          presentCategories = presentCategories + 1;
        }

        if(presentCategories >= minCourse) {
          dinersWithEnoughFood = dinersWithEnoughFood + 1;
        }
      });

      if(dinersWithEnoughFood == this.state.diners.length) {
        newWarning.minCourseForAll = true;
      } else {
        newWarning.minCourseForAll = false;
      }

      // cheescake
      let des = 0;
      this.state.diners.map(diner => {
        if(diner.order.desserts[0] && diner.order.desserts[0].id == lastDessert) {
          des = des + 1;
        }
      });

      if(des > 0) {
        newWarning.dessertMissing = true;
      } else {
        newWarning.dessertMissing = false;
      }

      this.setState({warning: newWarning});
    }

    render() {
        return (
          <div className={styles.app}>
            <header style={{backgroundImage: 'url(./pictures/Header.png)'}} >
              <h1>Test restaurant name</h1>
            </header>
            <div className={styles.wrap}>
              <Menu addItem={this.addItem}/>
              <Order
                diners={this.state.diners}
                total={this.state.total}
                warning={this.state.warning}
                dinerOn={this.state.selectedDiner}
                removeItem={this.removeItem}
                changeSelected={this.changeSelected}
              />
            </div>
          </div>
        );
    }
}

render(<App />, document.getElementById('root'));
