import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export default class Index extends Component {
  render() {
    return (
      <App/>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'))
