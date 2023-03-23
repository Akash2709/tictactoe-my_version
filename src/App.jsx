import "./styles.scss";
import Board from "./components/Board";

function App() {
  const returnValue = useState(1);
  console.log(returnValue);

  let counter = 1;
  const onBtnClick = () => {
    console.log("hello");
    counter = counter + 1;
  };
  return (
    <div className="app">
      <div>
        <button onClick={onBtnClick}>Click me please</button>
        <div>{counter}</div>
      </div>
    </div>
  );
}

export default App;
