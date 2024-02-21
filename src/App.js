import "./App.css";
import HeadersComponents from "./components/Headers/Headers.components";
import Table from "./components/Table/Table.components";

function App() {
  return (
    <div  className="App">
      <div>
        <div>
          <HeadersComponents />
        </div>
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default App;
