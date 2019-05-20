// reducer
export default (state = [], action) => {
  switch (action.type) {
    case "SET_CATS":
      return action.cats
    case "LIKE_CAT_SUCCESS":
       const newCatsArr = state.map(cat => {
         if (action.cat.id === cat.id) {
           const newCat = Object.assign({}, cat)
           newCat.status = "liked"
           return newCat
         } else {
           return cat
         }
       })
      return newCatsArr
    default:
      return state
    }
}
