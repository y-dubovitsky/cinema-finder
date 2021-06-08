import { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    search: ''
  }

  render() {
    const { getData } = this.props;

    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="search"
            type="text"
            placeholder="Search..."
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={(event) => {
              if (event.code === 'Enter') {
                getData(this.state.search)
              }
            }}
          />
        </div>
      </div>
    )
  }
}

export default Search;