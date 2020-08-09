import React, { Component } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'
import Search from './components/search/search.component.jsx'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datalists : [],
      searchField : '' 
    }
  }
  
  componentDidMount() {
    fetch("https://api.covid19india.org/data.json")
    .then(response => response.json())
    .then( data => this.setState({datalists : data.statewise}) )
  }

  handleChange = (e) => {
      this.setState({searchField: e.target.value})
  }

  render() {
    const {datalists, searchField}  = this.state
    const dataFilter = datalists.filter(datalist => datalist.state.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Covid19 India</h1>
        <Search onhandle={this.handleChange} placeholder="search state">

        </Search>
        <CardList datalists = {dataFilter}></CardList>
      </div>
    )
  }
}

export default App