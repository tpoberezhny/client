import _ from "lodash";

export function getSum(transaction, typeColors) {
  let sum = _(transaction)
    .groupBy("type")
    .map((objs, key) => {
      return {
        type: key,
        color: (typeColors && typeColors[key]) || "#f9c74f",
        total: _.sumBy(objs, "amount"),
      };
    })
    .value();
  return sum;
}

export function getLabels(transaction, typeColors) {
  let amountSum = getSum(transaction, "type", typeColors);

  let result = amountSum.map((objs) => ({
    type: objs.type,
    color: objs.color,
    total: objs.total,
    percent: objs.total,
  }));

  return result;
}

export function chart_Data(transaction, custom, typeColors) {
  let dataValue = getSum(transaction, typeColors);

  const config = {
    data: {
      datasets: [
        {
          data: dataValue.map((item) => item.total),
          backgroundColor: dataValue.map((item) => item.color),
          hoverOffset: 10,
          borderRadius: 6,
          spacing: 5,
        },
      ],
    },
    options: {
      cutout: 110,
    },
  };

  return custom ?? config;
}

export function getTotal(transaction) {
  return _.sumBy(transaction, "amount");
}
