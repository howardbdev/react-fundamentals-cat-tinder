// action creators
export const setCats = cats => {
  return { type: "SET_CATS", cats: cats }
}

export const likeCatSuccess = cat => {
  return {
    type: "LIKE_CAT_SUCCESS",
    cat: cat
  }
}

// async action creators
export const getCats = () => {
  return dispatch => {
    return fetch("http://localhost:3001/cats")
      .then(r=>r.json())
      .then(cats => dispatch(setCats(cats)))
  }
}

export const likeCat = cat => {
  return dispatch => {
    const likedCat = { ...cat,
                 status: "liked"
               }
    return fetch(`http://localhost:3001/cats/${cat.id}`, {
      method: "PATCH",
      headers: {
          "Content-Type": 'application/json'
        },
      body: JSON.stringify({ cat: likedCat })
    })
      .then(r=>r.json())
      .then(cat => dispatch(likeCatSuccess(cat)))
  }
}
