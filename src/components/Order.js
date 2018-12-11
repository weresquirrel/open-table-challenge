import React from "react";
import Data from './../../menu-data.json';

class Order extends React.Component {


  render() {
    // console.log(Data.desserts);

    return (
      <div>
        <p>YOUR ORDER FOR 2</p>
        <p>Yor waiter today is Pierre.</p>
        <p>diner 1</p>
        {this.props.order.map(dishId =>
          <div key={dishId}>
            {dishId < 5  &&
              <p>
                <button id={dishId}>-</button>
                {Data.starters[dishId - 1].name}
                {'........'}
                £{Data.starters[dishId - 1].price}
              </p>
            }
            {dishId < 9  &&
              dishId > 4 &&
              <p>
                <button id={dishId}>-</button>
                {Data.mains[dishId - 5].name}
                {'........'}
                £{Data.mains[dishId - 5].price}
              </p>
            }
            {dishId < 12  &&
              dishId > 8 &&
              <p>
                <button id={dishId}>-</button>
                {Data.desserts[dishId - 9].name}
                {'........'}
                £{Data.desserts[dishId - 9].price}
              </p>
            }




          </div>
        )}
        <p>-------</p>
        <p>Total</p>
        <p>{this.props.total}</p>
        <p>-------</p>

      </div>
    );
  }
}

export default Order;
