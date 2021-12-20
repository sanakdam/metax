const initialState = {
  loading: true,
  payload: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TAG_LIST_TAG_BEGIN':
      return {
        ...state,
        loading: true,
      }

    case 'TAG_LIST_TAG_SUCCESS':
      return {
        ...state,
        loading: false,
        payload: action.payload,
      }

    case 'TAG_LIST_TAG_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    default:
      return state
  }
}
