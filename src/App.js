import "./App.css";
import Graph from "./components/Graph";
import Form from "./components/Form";
import { getCurrentMonthInRussian } from "./components/utils";

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-[#9BCEFF] text-white rounded">
          История Расходов ({getCurrentMonthInRussian()})
        </h1>
        {/*grid columns */}
        <div className="grid md:grid-cols-2 gap-4">
          {/*Chart */}
          <Graph />
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
