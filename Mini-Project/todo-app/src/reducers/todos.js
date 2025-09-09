const init = [
  {
    id: 1,
    content: "Cong viec 1",
    completed: false,
  },
  {
    id: 2,
    content: "Cong viec 2",
    completed: false,
  },
  {
    id: 3,
    content: "Cong viec 3",
    completed: true,
  },
];

const todosReducer = (state = init, action) => {
  let newState = [...state];
  switch (action.type) {
    case "CREATE__TODO":
      newState = [
        ...newState,
        {
          id: Date.now(),
          content: action.content,
          complete: false,
        },
      ];
      return newState;
    case "COMPLETED__TODO": {
      const index = newState.findIndex((item) => {
        return item.id === action.id;
      });
      newState[index].completed = true;
      return newState;
    }
    case "UNCOMPLETED__TODO": {
      const indexUn = newState.findIndex((item) => {
        return item.id === action.id;
      });
      newState[indexUn].completed = false;
      return newState;
    }
    case "DELETE__TODO": {
      newState = newState.filter((item) => {
        return item.id !== action.id;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default todosReducer;
