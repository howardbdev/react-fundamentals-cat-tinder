// synchronous action creator
export const setCats = cats => {
  return {
    type: "SET_CATS",
    cats
  }
}

export const createCatSuccess = cat => {
  return {
    type: "CREATE_CAT_SUCCESS",
    cat
  }
}

// async action creators

export const getCats = () => {
  return dispatch => {
    return fetch("http://localhost:3001/cats")
      .then(r=>r.json())
      .then(catsJSON => {
        console.log("catsJSON is ", catsJSON)
        dispatch(setCats(catsJSON))
      })
  }
}

export const uploadCat = (catData) => {
  return dispatch => {
    const headers = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(catData)
    }

    return fetch("http://localhost:3001/cats", headers)
      .then(r => r.json())
      .then(cat => {
        if (cat.error) {
          alert(cat.error)
        } else {
          dispatch(createCatSuccess(cat))
        }
        return cat
      })
  }
}
