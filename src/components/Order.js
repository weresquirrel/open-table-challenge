import React from "react";
import Data from './../../menu-data.json';

class Order extends React.Component {
  render() {
    // console.log(Data.desserts);

    return (
      <div>
        <p>YOUR ORDER FOR 2</p>
        {this.props.order.map(dish =>
          <div key={dish}>

            <p>{Data.starters[parseInt(dish) - 1].name}
            {'........'}
             £{Data.starters[parseInt(dish) - 1].price}</p>

          </div>
        )}

        <p>-------</p>

      </div>
    );
  }
}

export default Order;
