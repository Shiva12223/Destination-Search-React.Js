// Write your code here
import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  onChangeDestinationInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachDestinationItem =>
      eachDestinationItem.name
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="destination-card-container">
          <h1>Destination Search</h1>
          <div className="input-container">
            <input
              placeholder="Search"
              className="searchInput"
              type="search"
              value={searchInput}
              onChange={this.onChangeDestinationInput}
            />
            <img
              className="search-icon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
          <ul className="cards-container">
            {searchResults.map(eachItem => (
              <DestinationItem
                destinationDetails={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
