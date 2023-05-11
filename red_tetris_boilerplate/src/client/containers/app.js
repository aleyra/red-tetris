import React from 'react'
import { connect } from 'react-redux'

//css

//from our js
import { Select_Mode } from './select_mode/Select_mode'
import { router } from '../components/router'
import { Presentation } from './utils_functions/Presentation'


const App = ({message}) => {
  return (
    <React.Fragment>
      <span>{message}</span>
      {/* <Presentation /> */}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => {
  return {
    message: state.message
  }
}
export default connect(mapStateToProps, null)(App)


