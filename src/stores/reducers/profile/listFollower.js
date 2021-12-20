const initialState = {
  loading: true,
  payload: [],
  pages: 1,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PROFILE_LIST_FOLLOWER_BEGIN':
      return {
        ...state,
        loading: true,
      }

    case 'PROFILE_LIST_FOLLOWER_SUCCESS':
      return {
        ...state,
        loading: false,
        payload: action.payload,
        pages: action.pages,
      }

    case 'PROFILE_LIST_FOLLOWER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
