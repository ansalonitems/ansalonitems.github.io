'use strict'

import React from 'react'
import moment from 'moment'
import GenericMetadataComponent from './generic-item-metadata-component.js'

export default React.createClass({
  displayName: 'ItemComponent',

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <GenericMetadataComponent item={this.props.item}>
        <table>
          <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Level</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{this.props.item.name}</td>
            <td>
              <a href={`/items/${this.props.item.type}`}>{this.props.item.type}</a>
            </td>
            <td>{this.props.item.level}</td>
          </tr>
          </tbody>
        </table>
      </GenericMetadataComponent>
    )
  }
})
