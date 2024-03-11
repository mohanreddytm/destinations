import {Component} from 'react'
import DestinationItems from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeFun = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const filteredList = destinationsList.filter(eachOne =>
      eachOne.name.includes(searchInput),
    )

    return (
      <div className="items-container">
        <h1>Destination Search</h1>

        <input
          id="inputElement"
          type="search"
          name="inputElement"
          onChange={this.onChangeFun}
        />
        <label htmlFor="inputElement">
          <img
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </label>

        <ul className="items">
          {filteredList.map(eachOne => (
            <DestinationItems items={eachOne} key={eachOne.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
