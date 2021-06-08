import { Component } from 'react';
import Movies from '../../components/movies/Movies';
import Preloader from '../../components/preloader/Preloader';
import Search from '../../components/search/Search';
import style from './Main.module.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [],
    filter: '',
    loading: true
  }

  componentDidMount() {
    this.getData();
  }

  getData = async (filmName = 'Matrix', filter = '') => {
    this.setState({loading: true});

    const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${filmName}&type=${filter}`);
    const json = await response.json();

    this.setState({
      movies: json.Search,
      loading: false
    })
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <div className={style.container}>
        <Search getData={this.getData} />
        {
          loading === true ? <Preloader /> : <Movies movies={movies} />
        }
      </div>
    )
  }
}

export default Main;