import React from 'react';
import Menu from './components/Menu';
import { render } from 'react-dom';

class App extends React.Component {
    render() {
        return (
          <div>
            <h1>Restaurant Test</h1>
            <Menu/>
          </div>
        );
    }
}

render(<App />, document.getElementById('root'));
