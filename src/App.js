import "./App.css";
import Calculator from "./Calculator";
import Counter from "./Counter";
import InputCapture from "./InputCapture";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      <br />
      <br />

      <InputCapture />
      <br />
      <br />

      <Counter />
      <br />
      <br />

      <Calculator />
    </div>
  );
}

export default App;
