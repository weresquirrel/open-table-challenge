import React from "react";
import Data from './../../menu-data.json';
import styles from "./Menu.css";

class Menu extends React.Component {

  render() {
    return (
      <div className={styles.menu}>
        <h2>Menu</h2>

        <h3>starters</h3>
        {Data.starters.map(dish =>
          <div key={dish.id} className={styles.dish}>
            <p className={styles.dishName}>{dish.name}</p>
            <div className={styles.dishDetails}>
              <p>£{dish.price}</p>
              <button
                id={dish.id}
                onClick={this.props.addItem}
                className={styles.addBtn}
              >+</button>
            </div>

          </div>
        )}

        <h3>mains</h3>
        {Data.mains.map(dish =>
          <div key={dish.id} className={styles.dish}>
            <p className={styles.dishName}>{dish.name}</p>
            <div className={styles.dishDetails}>
              <p>£{dish.price}</p>
              <button
                id={dish.id}
                onClick={this.props.addItem}
                className={styles.addBtn}
              >+</button>
            </div>
          </div>
        )}

        <h3>desserts</h3>
        {Data.desserts.map(dish =>
          <div key={dish.id} className={styles.dish}>
            <p className={styles.dishName}>{dish.name}</p>
            <div className={styles.dishDetails}>
              <p>£{dish.price}</p>
              <button
                id={dish.id}
                onClick={this.props.addItem}
                className={styles.addBtn}
              >+</button>
            </div>
          </div>
        )}

      </div>
    );
  }
}

export default Menu;
