import React, { Component } from 'react'
import BookCard from './BookCard';
import fetchData from './fetchData';

export default class Cards extends Component {
  state = {
    data:[]
  }
  
  componentDidMount(){
    fetchData()
    .then((data) => this.setState({data: data.items}))
    
  }
  
  render() {
    return (
      <div>
        <BookCard data = {this.state.data}/>
      </div>
    )
  }
}
