/**
 * @flow
 */

import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './actions'
import type { State } from './reducer'

type Props = {
  count: number,
  increment: Function,
  decrement: Function
}

function Counter({ count, increment, decrement }: Props) {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}

function mapStateToProps(state: State) {
  return {
    count: state
  }
}

function mapDispatchToProps(dispatch: Function) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
