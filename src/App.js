import "./App.css";
import Graph from "./components/Graph";
import Form from "./components/Form";

function getCurrentMonthInRussian() {
  const monthsInRussian = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];
  
  const currentMonthIndex = new Date().getMonth();
  return monthsInRussian[currentMonthIndex];
}

function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
        <h1 className="text-4xl py-8 mb-10 bg-[#fb7185] text-white rounded">
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
