const API = (page, limit) => fetch(
  `https://avl-frontend-exam.herokuapp.com/api/users/friends?page=${page}&pageSize=${limit}`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
).then(res => res.json())

const handleErrors = (dispatch, error) => dispatch({
  type: 'PROFILE_LIST_FOLLOWING_FAILURE',
  error,
})

export default (page, limit) => async (dispatch) => {
  try {
    dispatch({ type: 'PROFILE_LIST_FOLLOWING_BEGIN' })

    const result = await API(page, limit)

    dispatch({
      type: 'PROFILE_LIST_FOLLOWING_SUCCESS',
      payload: result.data || [],
      pages: result.totalPages || 1,
    })
  } catch (err) {
    handleErrors(dispatch, err)
  }
}
