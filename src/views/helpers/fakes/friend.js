export default value => [...Array(value).keys()].map(
  () => ({
    id: '',
    name: '',
    username: '',
    avater: '',
    isFollowing: false,
  }),
)
