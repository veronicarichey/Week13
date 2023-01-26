import React, { Component } from 'react'


export default class Form extends Component {
  render() {
    return (
        <div className="form">
        <form>
            <h3>Log In</h3>
          <div className="input-container m-3">
            <label>Username </label>
            <input type="text" name="uname"/>
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass"/>
          </div>
          <div className="button-container m-3">
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}
