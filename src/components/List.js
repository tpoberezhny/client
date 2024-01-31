import React from "react";
import "boxicons";
import { default as api } from "../store/apiSlice";

export default function List() {
  const { data, isFetching, isSuccess, isError } = api.useGetTransactionQuery();

  console.log("Data:", data);
  console.log("Is Success:", isSuccess);
  console.log("Is Error:", isError);
  let Transactions;

  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    Transactions = data.map((v, i) => (
      <Transaction key={v.id} transaction={v}></Transaction>
    ));
  } else if (isError) {
    Transactions = <div>Error</div>;
  }

  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">История</h1>
      {Transactions}
    </div>
  );
}

function Transaction({ transaction }) {
  if (!transaction) return null;
  return (
    <div
      className="item flex justify-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${transaction.color ?? "#e5e5e5"}` }}
    >
      <button className="px-3">
        <box-icon color={transaction.color} size="15px" name="trash" />
      </button>
      <span className="block w-full">{transaction.name ?? ""}</span>
    </div>
  );
}
