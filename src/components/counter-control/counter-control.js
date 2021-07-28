import React, {Component} from 'react';

class CounterControl extends Component {

  state = {
    counter: 0,
  }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log(` nextContext: `, nextContext);
  //   if ((nextState.counter %2) === 0) {
  //     return true;
  //   }
  //   return false;
  // }

  incrementCounter = (data) => {
    const newCounter = this.state.counter + 1;
    // todo ...will be logic about positive
    this.setState({counter: newCounter})
    console.log(` data: `, data);
  }

  decrementCounter = () => {
    const newCounter = this.state.counter - 1;
    if (newCounter >= 0) {
      this.setState({counter: newCounter})
    }
  }

  componentDidMount() { // Выполняет какое-то действие после того как страница
                         // первый раз отрендерилась
    this.props.rewriteCounter(this.state.counter);
  }

  componentDidUpdate(prevProps, prevState) { // проверяет предыдущее и текущее состояние
                                             // пропсов и стейтов
                                            // и в случае их изменений что-то делает
    if (prevState !== this.state) {
      if (this.state.counter %2 === 0){
        this.props.rewriteCounter(this.state.counter);
      }
    }
  }

  render() {
    return (
      <div>
        <button onClick={() => this.incrementCounter('Give me money!!!')}>inc +</button>
        <button onClick={this.decrementCounter}>dec -</button>
      </div>
    );
  }
}

export default CounterControl;