import React, {Component} from 'react'
// import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'

class Calculator extends Component {
  constructor() {
    super();
    // this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  // handleChange(e) {
  //   this.setState({temperature: e.target.value});
  // }

  render() {
    var temperature = this.state.temperature;
    return (

      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />      
      </div>
    );
  }
}

export default Calculator