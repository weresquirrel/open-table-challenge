import React from "react";
import Data from './../../menu-data.json';
import styles from "./Menu.css";

class Menu extends React.Component {

  render() {
    return (
      <div className={styles.menu}>

        <h2>starters</h2>
        {Data.starters.map(dish =>
          <div key={dish.id} className={styles.dish}>
            <div className={styles.dishDetails}>
              <p className={styles.dishName}>{dish.name}</p>
              <p>£{dish.price}</p>
            </div>
            <button
              id={dish.id}
              onClick={this.props.addItem}
              className={styles.addBtn}
            >+</button>

          </div>
        )}

        <h2>mains</h2>
        {Data.mains.map(dish =>
          <div key={dish.id} className={styles.dish}>
            <div className={styles.dishDetails}>
              <p className={styles.dishName}>{dish.name}</p>
              <p>£{dish.price}</p>
            </div>
            <button
              id={dish.id}
              onClick={this.props.addItem}
              className={styles.addBtn}
            >+</button>
          </div>
        )}

        <h2>desserts</h2>
        {Data.desserts.map(dish =>
          <div key={dish.id} className={styles.dish}>
            <div className={styles.dishDetails}>
              <p className={styles.dishName}>{dish.name}</p>
              <p>£{dish.price}</p>
            </div>
            <button
              id={dish.id}
              onClick={this.props.addItem}
              className={styles.addBtn}
            >+</button>
          </div>
        )}

      </div>
    );
  }
}

export default Menu;
