import React from "react";
import Data from './../../menu-data.json';

class Order extends React.Component {


  render() {
    // console.log(Data.desserts);

    return (
      <div>
        <p>YOUR ORDER FOR 2</p>
        {this.props.order.map(dishId =>
          <div key={dishId}>
            {dishId < 5  &&
              <p>
                {Data.starters[dishId - 1].name}
                {'........'}
                £{Data.starters[dishId - 1].price}
              </p>
            }
            {dishId < 9  &&
              dishId > 4 &&
              <p>
                {Data.mains[dishId - 1].name}
                {'........'}
                £{Data.mains[0].price}
              </p>
            }
            {dishId < 12  &&
              dishId > 8 &&
              <p>
                des
              </p>
            }




          </div>
        )}
        <p>-------</p>
        <p>Subtotal</p>
        <p>{this.props.total}</p>
        <p>-------</p>

      </div>
    );
  }
}

export default Order;
