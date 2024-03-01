import React from "react";
import { default as api } from "../store/apiSlice";
import { getLabels } from "../helper/helper";

export default function Labels() {
  const { data, isFetching, isSuccess, isError } = api.useGetTransactionQuery();
  let Transactions;

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    const typeColors = {
      Продукты: "rgb(255, 215, 0)",
      Аренда: "rgb(255, 0, 255)",
      Рестораны: "rgb(139, 0, 139)",
      $taff: "rgb(255, 69, 0)",
      Развлечения: "rgb(127, 255, 212)",
      Нужды: "rgb(255, 51, 51)",
      Путешествия: "rgb(204, 0, 153)",
    };

    Transactions = getLabels(data, typeColors).map((v, i) => (
      <LabelComponent key={i} data={v} typeColors={typeColors}></LabelComponent>
    ));
  } else if (isError) {
    Transactions = <div>Error</div>;
  }

  return <>{Transactions}</>;
}

function LabelComponent({ data, typeColors }) {
  if (!data) return <></>;
  const backgroundColor = typeColors[data.type] || "#f9c74f";

  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          style={{ background: backgroundColor }}
        ></div>
        <h3 className="text-md">{data.type ?? ""}</h3>
      </div>
      <h3 className="font-bold">{data.percent ?? 0} Kč</h3>
    </div>
  );
}
