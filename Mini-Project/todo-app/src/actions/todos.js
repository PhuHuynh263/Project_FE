export const createTodo = (content) => {
  return {
    type: "CREATE__TODO",
    content: content,
  };
};

export const completedTodo = (id) => {
  return {
    type: "COMPLETED__TODO",
    id: id,
  };
};

export const unCompletedTodo = (id) => {
  return {
    type: "UNCOMPLETED__TODO",
    id: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE__TODO",
    id: id,
  };
};
