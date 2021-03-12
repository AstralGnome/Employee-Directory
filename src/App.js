import React from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import API from "./utils/API";
//App.js is the main controller.
class App extends React.Component {
  state = {
    users: [],
    results: [],
    searchInput: ""
  };

  componentDidMount() {
    API.getUsers().then((res) => {
      console.log(res)
      this.setState({
        users: res.data.results,
        results: res.data.results
      })
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
    if (value === "") {
      this.setState({
        results: this.state.users
      })
      return
    }
    const inputLength = document.querySelector("#searchInput").value.length
    const filteredUsers = this.state.users.filter(user => user.name.first.toLowerCase().includes(value.toLowerCase().slice(0, inputLength) )
    )
    this.setState({
      results: filteredUsers,
    })
  }

  handleButtonSort = event => {
    // console.log(event.target.id)
    let sortFilter
    if (event.target.id === "sort-first") {
      sortFilter = this.state.users.sort((a,b) => a.name.first > b.name.first ? 1 : -1 )
      this.setState({
        results : sortFilter
      }) 
    } else if (event.target.id === "sort-last") {
      sortFilter = this.state.users.sort((a,b) => a.name.last > b.name.last ? 1 : -1 )
      this.setState({
        results : sortFilter
      }) 
    }
  }
  
  render() {
    return (
      <div className="container">
        <Header 
          handleInputChange = {this.handleInputChange}
          searchInput = {this.state.searchInput}
          handleButtonSort = {this.handleButtonSort}
        />
        <Body 
          users={this.state.results} />
      </div>
    );
  }
}

//One component to manage states, One component to bind them, One component to rule them all, and in the darkness BIND them.

export default App;
