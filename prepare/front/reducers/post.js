export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: 'jw',
    },
    content: '첫 번째 게시글 #해시태그',
    Images: [{
      src: 'https://cdn.pixabay.com/photo/2022/01/25/12/53/tree-6966126__480.jpg'
    }, {
      src: 'https://cdn.pixabay.com/photo/2022/01/25/12/53/tree-6966126__480.jpg'
    }, {
      src: 'https://cdn.pixabay.com/photo/2022/01/25/12/53/tree-6966126__480.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'hero',
      },
      content: 'hi',
    }],
  }],
  imagePaths: [], // 이미지 업로드 시 이미지 경로 저장
  addPostLoading: false, // 게시글 추가 완료 시 true로 변환
  addPostDone: false,
  addPostError: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = {
  type: ADD_POST_REQUEST,
}

export const addComment = {
  type: ADD_COMMENT_REQUEST,
}

const dummyPost = {
  id: 2,
  content: '더미데이터',
  User: {
    id: 1,
    nickname: 'jw'
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        addPostLoading: false,
        addPostDone: true,
      }
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      }
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      }
    default:
      return state;
  }
}

export default reducer;