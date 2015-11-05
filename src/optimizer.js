'use strict'

import React from 'react'
import PageComponent from './page-component.js'

export default React.createClass({
  displayName: 'OptimizerPage',

  getInitialState() {
    return {}
  },

  handleLevelChanged(e) {
    this.setState({level: parseInt(e.target.value, 10)})
  },

  forwardToGearPage() {
    window.location.href = `/optimizer/for/${this.state.level}/`
  },

  render() {
    return (
      <PageComponent>
        <h4>Gear Optimizer</h4>
        <div className="form-element">
          <label htmlFor="level">Level
            <select id="level" onChange={this.handleLevelChanged} value={this.state ? this.state.level : 1}>
              {Array(101).fill(0).map((__, it) => {
                return <option key={it} value={it + 1}>{it + 1}</option>
              })}
            </select>
          </label>
        </div>
        <div className="form-element">
          <button onClick={this.forwardToGearPage} className="button button-primary">Get my gear</button>
        </div>
      </PageComponent>
    )
  }
})
