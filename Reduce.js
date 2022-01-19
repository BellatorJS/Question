const orders = [
  { id: "1", status: "pending" },
  { id: "2", status: "pending" },
  { id: "3", status: "cancelled" },
  { id: "4", status: "shipped" },
];

result = orders.reduce((acc, order) => {
//объясните пожалуйста, как работает строка ниже. Почему используем || 0? Неясна эта конструкция (acc[order.status] || 0) + 1
  return { ...acc, [order.status]: (acc[order.status] || 0) + 1 };
}, {});


