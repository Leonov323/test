import { store } from '../../../store'

export const TakeData = (prop) => {
  const loading = store.getState().loading.value
  if (loading === false) {
    return prop
  } else { return null }
}
