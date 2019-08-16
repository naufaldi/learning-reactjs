const { useState, useContext } = React

const CountContext = React.createContext();

const Counter = () => {
  const { count, increase, decrease } = useContext(CountContext);
  return (
    <div className="wrapper">
      <button onClick={decrease}>-</button>
      <span className="count">{count}</span>
      <button onClick={increase}>+</button>
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <CountContext.Provider
        value={{ count, increase, decrease }}
      >
        <Counter />
      </CountContext.Provider>
    </div>
  );
};
ReactDOM.render(
    <App />,
    document.getElementById('root')
);