import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class JavaComponent extends React.Component {
  static propTypes = {years: PropTypes.number.isRequired}

  render() {
    return (
      <div>javaComponent: {this.props.years}</div>
    )
  }
}

export default JavaComponent