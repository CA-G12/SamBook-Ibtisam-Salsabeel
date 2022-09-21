import React, { Component } from 'react'

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: props
    }
    // console.log(props,55)
  }
  render() {
    return (
      <div>SearchBar</div>
    )
  }
}
