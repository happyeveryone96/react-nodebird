import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

// 이전 상태와 액션을 통해 다음 상태를 만든다.
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        return { ...state, ...action.payload };
       default:
         return state;
    }
  },
  user,
  post,
});

export default rootReducer;