import React, { Component } from "react";
import { Header, Cards, IndexSection } from "./components/index";
import fetchData from "./components/fetchData";
import './index.css'

export default class App extends Component {
  state = {
    data: [],
    searchValue: "Culture",
  };

  componentDidMount() {
    fetchData(this.state.searchValue).then((response) =>
      this.setState({ data: response.items })
    );
  }

  handleSearchValue = (e) => {
    if (e.target.value.trim() !== "") {
      this.setState({ searchValue: e.target.value });
      fetchData(this.state.searchValue).then((response) =>
        this.setState({ data: response.items })
      );
    } else {
      alert("empty not vaild");
    }
  };

  render() {
    return (
      <>
        <Header data={this.state} handleSearchValue={this.handleSearchValue} />
        <IndexSection />
        <section className="cards-section" id="nav">
          <Cards data={this.state} />
        </section>
      </>
    );
  }
}
