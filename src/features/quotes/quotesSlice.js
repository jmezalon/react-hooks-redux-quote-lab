// Action Creators
// TODO: Create action creators as defined in tests
export const addQuote = (quote) => {
  return {
    type: "quotes/add",
    payload: quote,
  };
};

export const Upote = (id) => {
  return {
    type: "quotes/upvote",
    payload: id,
  };
};

export const Downvote = (id) => {
  return {
    type: "quotes/downvote",
    payload: id,
  };
};

export const deleteQuote = (id) => {
  return {
    type: "quotes/delete",
    payload: id,
  };
};

// Reducer
const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case "quotes/add":
      return [...state, action.payload];

    case "quotes/upvote":
      let upvote = state.map((q) => {
        if (q.id === action.payload) {
          return { ...q, vote: q.vote + 1 };
        } else {
          return q;
        }
      });
      return upvote;

    case "quotes/downvote":
      let downvote = state.map((q) => {
        if (q.id === action.payload) return { ...q, vote: q.vote - 1 };
        else return q;
      });
      return downvote;

    case "quotes/delete":
      return state.filter((q) => q.id !== action.payload);

    default:
      return state;
  }
}
