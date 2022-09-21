import React, { Component } from 'react'
import { Header, Cards } from './components/index';

export default class App extends Component {
  state = {
    data:[]
  };
  render() {
    return (
      <>
        <Header />
        <Cards />
      </>
    )
  }
}
