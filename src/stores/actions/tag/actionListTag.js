const API = () => fetch(
  `https://avl-frontend-exam.herokuapp.com/api/tags`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
).then(res => res.json())

const handleErrors = (dispatch, error) => dispatch({
  type: 'TAG_LIST_TAG_FAILURE',
  error,
})

export default () => async (dispatch, getState) => {
  try {
    dispatch({ type: 'TAG_LIST_TAG_BEGIN' })

    const payload = await getState().tag.listTag.payload
    if (payload.length > 0) {
      dispatch({
        type: 'TAG_LIST_TAG_SUCCESS',
        payload,
      })
      return
    }

    const result = await API()

    dispatch({
      type: 'TAG_LIST_TAG_SUCCESS',
      payload: result || [],
    })
  } catch (err) {
    handleErrors(dispatch, err)
  }
}
