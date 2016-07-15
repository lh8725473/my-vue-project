export const showAlert = ({ dispatch }, msg) => {
  dispatch('SHOW_ALERT', msg)
}

export const changeAlertMessage = ({ dispatch }, msg) => {
  dispatch('CHANGE_ALERT_MESSAGE', msg)
}
