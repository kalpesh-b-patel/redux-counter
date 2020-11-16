import { connect } from 'react-redux';
import { increment, decrement, reset } from './CountActions';
import './Counter.css';

const Counter = (props) => {
  return (
    <div className='counter'>
      <div className='counter__result'>
        <h1>Count: {props.count}</h1>
      </div>

      <div className='counter__action'>
        <button onClick={props.increment}>Increment</button>
        <button onClick={props.decrement}>Decrement</button>
        <button onClick={props.reset}>Reset</button>
      </div>

      <p>Basic React-Redux Counter</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
