import React from 'react';
import Menu from './components/Menu';
import Order from './components/Order';
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.state = {
      total: 0,
      order: []
    };
  }

    addItem(e) {
      console.log(e.target.id);
      const a = this.state.order;
      a.push(e.target.id);
      this.setState({order: a});
    }

    render() {
        return (
          <div>
            <h1>Restaurant Test</h1>
            <Order order={this.state.order}/>
            <Menu addItem={this.addItem}/>
          </div>
        );
    }
}

render(<App />, document.getElementById('root'));
