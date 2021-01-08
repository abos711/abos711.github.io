import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/HeaderFooter/Header'
import Footer from './components/HeaderFooter/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import ResumeStyle from './components/Resume/ResumeStyle'
import Contact from './components/Contact/Contact'

class App extends Component {
  constructor () {
    super()
    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map((msgAlert, index) => (
          <AutoDismissAlert
            key={index}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">
          <Route exact path='/' render={() => (
            <Home msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/about' render={() => (
            <About msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/skills' render={() => (
            <Skills msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/portfolio' render={() => (
            <Portfolio msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/resume' render={() => (
            <ResumeStyle msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/contact' render={() => (
            <Contact msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
        </main>
        <Footer/>
      </Fragment>
    )
  }
}

export default App
