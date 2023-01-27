
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};
function App() {
  return (
    <div class="dashboard">
      <div class="container d-grid">
        <section class="main-container">
          
            <h2 class="title">PieChart</h2>
            <div class="group-info card-2">
            <div class="container">
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"600px"}
      height={"400px"}
    />
     </div>
          </div>
          </section>
    </div>
  </div>
  );
}

export default App;
