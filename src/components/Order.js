import React from "react";
// import Data from './../../menu-data.json';

class Order extends React.Component {


  render() {
    // console.log(this.props.order.diner1.starters);

    const starters = this.props.order.diner1.starters;
    // const startersLength = starters.length;

    const mains = this.props.order.diner1.mains;
    // const mainsLength = mains.length;

    const desserts = this.props.order.diner1.desserts;
    // const dessertsLength = desserts.length;

    let message = '';
    if(this.props.warning.seaStop == true) {
      message = 'No more than one seafood/person, please!';
    }


    return (
      <div>
        <p>YOUR ORDER FOR 2</p>
        <p>Yor waiter today is Pierre.</p>
        <p>{message}</p>
        <p>diner 1</p>
        {starters[0] &&
          <p>
            <button id="starter" onClick={this.props.removeItem}>-</button>
            {starters[0].name}
            {'........'}
            £{starters[0].price}
          </p>
        }
        {mains[0] &&
          <p>
            <button id="main" onClick={this.props.removeItem}>-</button>
            {mains[0].name}
            {'........'}
            £{mains[0].price}
          </p>
        }
        {desserts[0] &&
          <p>
            <button id="dessert" onClick={this.props.removeItem}>-</button>
            {desserts[0].name}
            {'........'}
            £{desserts[0].price}
          </p>
        }



        <p>-------</p>
        <p>Total</p>
        <p>{this.props.total}</p>
        <p>-------</p>

      </div>
    );
  }
}

export default Order;
