import { Component } from 'react';
import Movies from '../../components/movies/Movies';
import Preloader from '../../components/preloader/Preloader';
import Search from '../../components/search/Search';
import style from './Main.module.css';

class Main extends Component {
  state = {
    movies: [],
    filter: ''
  }

  componentDidMount() {
    this.getData();
  }

  getData = async (filmName = 'Matrix', filter = '') => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=641f3ad9&s=${filmName}&type=${filter}`);
    const json = await response.json();

    this.setState({
      movies: json.Search
    })
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={style.container}>
        <Search getData={this.getData}/>
        {
          movies.length === 0 ? <Preloader/> : <Movies movies={movies} />
        }
      </div>
    )
  }
}

export default Main;