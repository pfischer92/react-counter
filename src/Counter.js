import React from 'react';
import { Button } from 'react-bootstrap';


export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrement() {
    if(this.state.counter > 0){
      this.setState({ counter: this.state.counter - 1 });
    }
  }
  reset() {
    this.setState({ counter: 0 });
  }
  render() {
    const nrStyle = {
      textAlign: 'center',
      fontSize: '320px',
      margin: '10px'
    };
    return (
      <div className="container-fluid">
        <p style={nrStyle}>{this.state.counter}</p>
        <Button bsStyle="primary" onClick={this.increment}>
            INC
        </Button>&nbsp;
        <Button bsStyle="secondary" onClick={this.decrement}>
            DEC
        </Button>&nbsp;
          <Button bsStyle="warning" onClick={this.reset}>
          Reset
        </Button>&nbsp;
          {this.props.message}
      </div>
    )
  }
}