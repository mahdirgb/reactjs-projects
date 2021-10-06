import react, { component } from "react";
class CounterClass extends react.Component {
  state = {
    count: 0,
  };
  addOneHandler = () =>{
      this.setState({count : this.state.count +1})
  }
  render() {
    return (
      <div>
        <h2>count - {this.state.count}</h2>
        <button type="button" onClick={this.addOneHandler}>add One</button>
      </div>
    );
  }
}

export default CounterClass;