export default (state=[], action) => {
  switch (action.type) {
    case "SET_CATS":
      return action.cats
    case "CREATE_CAT_SUCCESS":
      return [...state, action.cat]
    default:
      return state
  }
}
