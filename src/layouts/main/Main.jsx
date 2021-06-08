import { Component } from 'react';
import Movies from '../../components/movies/Movies';
import Preloader from '../../components/preloader/Preloader';
import Search from '../../components/search/Search';
import style from './Main.module.css';

class Main extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    const response = fetch('http://www.omdbapi.com/?apikey=641f3ad9&s=Matrix')
    .then(data => data.json())
    .then(data => this.setState({movies: data.Search}));
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={style.container}>
        <Search/>
        {
          movies.length === 0 ? <Preloader/> : <Movies movies={movies} />
        }
      </div>
    )
  }
}

export default Main;