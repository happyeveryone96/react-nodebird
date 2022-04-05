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
  postAdded: false, // 게시글 추가 완료 시 true로 변환
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
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
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true
      }
    default:
      return state;
  }
}

export default reducer;