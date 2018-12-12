import React from "react";
import styles from "./Order.css";

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
      <div className={styles.order}>
        <h2>Your order for 2</h2>
        <p className={styles.waiter}>Yor waiter today is Pierre.</p>
        <div className={styles.messageBox}>
          {messages.map(message =>
            <p key={message} className={styles.message}>
              {message}
            </p>
          )}
        </div>

        <h3>diner 1</h3>
        <div className={styles.ordered}>
          {starters[0] &&
            <div className={styles.dish}>
              <button
                id="starter"
                onClick={this.props.removeItem}
                className={styles.minusBtn}
              >-</button>
              <div className={styles.dishDetails}>
                <p>{starters[0].name}</p>
                <p>£{starters[0].price}</p>
              </div>
            </div>
          }
          {mains[0] &&
            <div className={styles.dish}>
              <button
                id="main"
                onClick={this.props.removeItem}
                className={styles.minusBtn}
              >-</button>
              <div className={styles.dishDetails}>
                <p>{mains[0].name}</p>
                <p>£{mains[0].price}</p>
              </div>
            </div>
          }
          {desserts[0] &&
            <div className={styles.dish}>
              <button
                id="dessert"
                onClick={this.props.removeItem}
                className={styles.minusBtn}
              >-</button>
              <div className={styles.dishDetails}>
                <p>{desserts[0].name}</p>
                <p>£{desserts[0].price}</p>
              </div>
            </div>
          }
        </div>
        {this.props.total > 0 &&
          <div className={styles.total}>
            <p>Total</p>
            <p>£{this.props.total}</p>
          </div>
        }
      </div>
    );
  }
}

export default Order;
