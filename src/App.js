// App.js
import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import Home from '../src/components/Home'
import ChatBox from './components/ChatBox'

function App(props) {
  return (
    <div>
      <Switch>
        <Route  path="/" component={Home} />
        {/* <Route  path="/" component={ChatBox} /> */}

        {/* <Route path="/about" component={About} /> */}
      </Switch>
    </div>
  )
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
