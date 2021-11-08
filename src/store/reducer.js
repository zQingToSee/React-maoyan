const defaultState = {
  list: [
    {
      name: "aaa",
      id: 1,
    },
    {
      name: "bbb",
      id: 2,
    },
  ],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "init":
      return {
        ...state,
        list: action.data.list,
      };
    case "add":
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case "remove":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
};

export default reducer;
