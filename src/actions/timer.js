/**
 * @flow
 */

function startTimer() {
  return {
    type: 'START_TIMER'
  }
}

function stopTimer() {
  return {
    type: 'STOP_TIMER'
  }
}

export {
  startTimer,
  stopTimer
}
