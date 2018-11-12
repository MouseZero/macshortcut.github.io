function ReduxStoreFactory() {
  const { createStore } = window.Redux
  const reducer = (state, action) => {
    IS_LOGGING && console.log('reducer called with this action: ', action)
    switch (action.type) {
      case 'SET_FIELD':
        return {
          ...state,
          [action.section]: {
            ...state[action.section],
            [action.field]: action.value
          }
        }
        break
      default:
        return state
    }
  }
  const store = createStore(reducer, {})
  store.subscribe(() => {
    IS_LOGGING && console.log(store.getState())
  })
  return store
}