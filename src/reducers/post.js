import { CREATE_POST, READ_POSTS, READ_POST, DELETE_POST } from './../actions';

const INITIAL_POST_STATE = { list: [], detail: {} };

export default function (state = INITIAL_POST_STATE, action) {
  var lastPostIndex;
  if(Boolean(action.payload))
    lastPostIndex = action.payload.data.length - 1;

  switch(action.type) {
    case CREATE_POST:
      return state;
    case READ_POSTS:
      return {...state, list: state.list.concat(...action.payload.data),
        startIndex: action.payload.data[0].id,
        endIndex: action.payload.data[lastPostIndex].id };
    case READ_POST:
      return {...state, detail: action.payload.data };
    case DELETE_POST:
      return state;
    default:
      return state;
  }
}
