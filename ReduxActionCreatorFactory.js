function ReduxActionCreatorFactory(dispatch) {
  const dispatchField = (dispatch) => ({section}) => ({field, value}) => {
      return dispatch({ type: 'SET_FIELD', section, field, value })
  }

  return {
    setField: dispatchField(dispatch) // invocation now needs to be ({sction})({field, value})
  }
}