import React from "react";
import styles from "./Order.css";

class Order extends React.Component {
  render() {
    const diners = this.props.diners;

    let messages = [];
    if(this.props.warning.seaStop == true) {
      const message = 'No more than one seafood/person, please!';
      messages.push(message);
    }
    if(this.props.warning.mainMust == true) {
      const message = 'Everyone needs main course.';
      messages.push(message);
    }
    if(this.props.warning.minCourseForAll == false) {
      const message = 'Everyone needs 2 courses at least.';
      messages.push(message);
    }
    if(this.props.warning.dessertMissing == true) {
      const message = 'Sorry, this was our last piece of cheesecake';
      messages.push(message);
    }

    return (
      <div className={styles.order}>
        <h2>Diner's order</h2>
        <div className={styles.messageBox}>
          {messages.map((message, i) =>
            <p key={i} className={styles.message}>
              {message}
            </p>
          )}
        </div>

        {diners.map((diner, i) =>
          <div key={diner.name}>
            <div className={styles.diner}>

              <input
                type="radio"
                value={diner.name}
                checked={this.props.dinerOn == diner.name}
                onChange={this.props.changeSelected}
              />

              <h3>Diner {i + 1}</h3>
            </div>
            <div className={styles.ordered}>
              {diner.order.starters[0] &&
                <div className={styles.dish}>
                  <div className={styles.dishDetails}>
                    <p>{diner.order.starters[0].name}</p>
                    <p>£{diner.order.starters[0].price}</p>
                  </div>
                  <button
                    id={`${diner.name}-starter`}
                    onClick={this.props.removeItem}
                    className={styles.minusBtn}
                  >-</button>
                </div>
              }
              {diner.order.mains[0] &&
                <div className={styles.dish}>
                  <div className={styles.dishDetails}>
                    <p>{diner.order.mains[0].name}</p>
                    <p>£{diner.order.mains[0].price}</p>
                  </div>
                  <button
                    id={`${diner.name}-main`}
                    onClick={this.props.removeItem}
                    className={styles.minusBtn}
                  >-</button>
                </div>
              }
              {diner.order.desserts[0] &&
                <div className={styles.dish}>
                  <div className={styles.dishDetails}>
                    <p>{diner.order.desserts[0].name}</p>
                    <p>£{diner.order.desserts[0].price}</p>
                  </div>
                  <button
                    id={`${diner.name}-dessert`}
                    onClick={this.props.removeItem}
                    className={styles.minusBtn}
                  >-</button>
                </div>
              }
            </div>
          </div>
        )}

        {this.props.total > 0 &&
          <div className={styles.totalContainer}>
            <div className={styles.total}>
              <p>Total</p>
              <p>£{this.props.total}</p>
            </div>
          </div>
        }
        <div className={styles.btnContainer}>
          <button className={styles.submit}>Place order</button>
        </div>
      </div>
    );
  }
}

export default Order;
