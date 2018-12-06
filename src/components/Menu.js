import React from "react";
import Data from './../../menu-data.json';

class Menu extends React.Component {
  render() {
    console.log(Data.starters);
    return (
      <div>
        <p>STARTERS</p>

        {Data.starters.map(starter =>
          <div key={starter.id} id={starter.id}>
            <p>{starter.name}</p>
            <p>£{starter.price}</p>
            <button>+</button>
          </div>
        )}

        <p>-------</p>
        <p>Mains</p>
        <p>Desserts</p>

      </div>
    );
  }
}

export default Menu;
