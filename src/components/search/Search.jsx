import { Component } from 'react';

class Search extends Component {

  state = {
    search: ''
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="search"
            type="text"
            placeholder="Search..."
            onChange={(event) => this.setState({search: event.target.value})}
          />
        </div>
      </div>
    )
  }
}

export default Search;