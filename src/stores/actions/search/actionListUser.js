import queryString from '../../../helpers/queryString'

const API = query => fetch(
  `https://avl-frontend-exam.herokuapp.com/api/users/all?${query}`,
  {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  },
).then(res => res.json())

const handleErrors = (dispatch, error) => dispatch({
  type: 'SEARCH_LIST_USER_FAILURE',
  error,
})

export default data => async (dispatch) => {
  try {
    dispatch({ type: 'SEARCH_LIST_USER_BEGIN' })

    const query = queryString.stringify(data)
    const result = await API(query)

    dispatch({
      type: 'SEARCH_LIST_USER_SUCCESS',
      payload: result.data || [],
      pages: result.totalPages || 1,
    })
  } catch (err) {
    handleErrors(dispatch, err)
  }
}
