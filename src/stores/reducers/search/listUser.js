const initialState = {
  loading: true,
  payload: [],
  pages: 1,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_LIST_USER_BEGIN':
      return {
        ...state,
        loading: true,
      }

    case 'SEARCH_LIST_USER_SUCCESS':
      return {
        ...state,
        loading: false,
        payload: action.payload,
        pages: action.pages,
      }

    case 'SEARCH_LIST_USER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
