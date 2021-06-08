import { Component } from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    search: '',
    type: ''
  }

  setFilmType = (event) => {
    const input = event.target.closest('input');
    if(input) {
      this.setState({type: input.value})
    }
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
                getData(this.state.search, this.state.type)
              }
            }}
          />
        </div>
        <div id="radios" onClick={this.setFilmType}>
          <label>
            <input class="with-gap" name="type" type="radio" value=""/>
            <span>All</span>
          </label>
          <label>
            <input class="with-gap" name="type" type="radio" value="movie"/>
            <span>Movies</span>
          </label>
          <label>
            <input class="with-gap" name="type" type="radio" value="series"/>
            <span>Series</span>
          </label>
        </div>
      </div>
    )
  }
}

export default Search;