import React, { Component } from 'react'
import { Header, Cards } from './components/index';
import fetchData from './components/fetchData';

export default class App extends Component {
  state = {
    data:[]
  };

  componentDidMount(){

  }
  render() {
    return (
      <>
        <Header data = {this.state.data} />
        <Cards />
      </>
    )
  }
}
