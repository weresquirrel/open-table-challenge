import React from "react";

class Order extends React.Component {


  render() {
    const starters = this.props.order.diner1.starters;
    const mains = this.props.order.diner1.mains;
    const desserts = this.props.order.diner1.desserts;

    let messages = [];
    if(this.props.warning.seaStop == true) {
      const message = 'No more than one seafood/person, please!';
      messages.push(message);
    }
    if(this.props.warning.mainMust == true) {
      const message = 'Everyone needs main course.';
      messages.push(message);
    }

    return (
      <div>
        <p>YOUR ORDER FOR 2</p>
        <p>Yor waiter today is Pierre.</p>
        {messages.map(message =>
          <div key={message}>
            {message}
          </div>
        )}

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

        {this.props.total > 0 &&
          <div id="total">
          <p>-------</p>
          <p>Total</p>
          <p>{this.props.total}</p>
          </div>
        }

        <p>-------</p>

      </div>
    );
  }
}

export default Order;
