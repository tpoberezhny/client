import React from "react";
import { useForm } from "react-hook-form";
import List from "./List";
import { default as api } from "../store/apiSlice";

export default function Form() {
  const { register, handleSubmit, resetField } = useForm();
  const [addTransaction] = api.useAddTransactionMutation();

  const onSubmit = async (data) => {
    if (!data) return {};
    await addTransaction(data).unwrap();
    resetField("name");
    resetField("amount");
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Растраты</h1>

      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              {...register("name")}
              placeholder="Кино, билеты"
              className="form-input"
            ></input>
          </div>
          <select className="form-input" {...register("type")}>
            <option value="Продукты" defaultValue>
              Продукты
            </option>
            <option value="Дрогерия">Дрогерия</option>
            <option value="Развлечения">Развлечения</option>
            <option value="Рестораны">Рестораны</option>
            <option value="Аренда">Аренда хаты</option>
          </select>
          <div className="input-group">
            <input
              type="text"
              {...register("amount")}
              placeholder="1000"
              className="form-input"
            ></input>
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full border-r-6">
              Coxранить
            </button>
          </div>
        </div>
      </form>
      <List></List>
    </div>
  );
}
