import React from "react";
import Data from './../../menu-data.json';

class Menu extends React.Component {

  render() {
    const categories = Object.keys(Data);
    // console.log(Data.starters);
    console.log(categories);

    return (
      <div>
         {//find the categories
         }
        {categories.map(category =>

          <div key={category}>
            <p>/{category}/</p>
          </div>
        )}

        {//find the dishes inside a category
        }
        <p>STARTERS</p>
        {Data.starters.map(starter =>
          <div key={starter.id}>
            <p>{starter.name}</p>
            <p>£{starter.price}</p>
            <button id={starter.id} onClick={this.props.addItem}>+</button>
          </div>
        )}

      </div>
    );
  }
}

export default Menu;
