import React from "react";
import Data from './../../menu-data.json';

class Menu extends React.Component {

  render() {
    

    return (
      <div>

        {//find the dishes inside a category
        }
        <p>STARTERS</p>
        {Data.starters.map(dish =>
          <div key={dish.id}>
            <p>{dish.name}</p>
            <p>£{dish.price}</p>
            <button id={dish.id} onClick={this.props.addItem}>+</button>
          </div>
        )}

        <p>MAINS</p>
        {Data.mains.map(dish =>
          <div key={dish.id}>
            <p>{dish.name}</p>
            <p>£{dish.price}</p>
            <button id={dish.id} onClick={this.props.addItem}>+</button>
          </div>
        )}

        <p>DES</p>
        {Data.desserts.map(dish =>
          <div key={dish.id}>
            <p>{dish.name}</p>
            <p>£{dish.price}</p>
            <button id={dish.id} onClick={this.props.addItem}>+</button>
          </div>
        )}

      </div>
    );
  }
}

export default Menu;
