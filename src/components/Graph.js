import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Labels from "./Labels";
import { chart_Data, getTotal } from "../helper/helper";
import { default as api } from "../store/apiSlice";

Chart.register(ArcElement);

export default function Graph() {
  const { data, isFetching, isSuccess, isError } = api.useGetTransactionQuery();
  let graphData;
  const typeColors = {
    Продукты: "rgb(255, 215, 0)",
    Аренда: "rgb(255, 0, 255)",
    Рестораны: "rgb(139, 0, 139)",
    Дрогерия: "rgb(255, 69, 0)",
    Развлечения: "rgb(127, 255, 212)",
  };

  if (isFetching) {
    graphData = <div>Fetching</div>;
  } else if (isSuccess) {
    graphData = <Doughnut {...chart_Data(data, null, typeColors)}></Doughnut>;
  } else if (isError) {
    graphData = <div>Error</div>;
  }

  return (
    <div className="flex justify-content max-w-xs mx-auto">
      <div className="item">
        <div className="chart relative">
          {graphData}
          <h3 className="mb-4 font-bold title">
            Итог:{" "}
            <span className="block text-3xl text-emerald-400">Kč {getTotal(data) ?? 0}</span>
          </h3>
        </div>
        <div className="flex flex-col py-10 gap-4">
          <Labels />
        </div>
      </div>
    </div>
  );
}