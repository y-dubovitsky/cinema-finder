import Movie from './movie/Movie';
import style from './Movies.module.css';

function Movies(props) {
  const { movies = []} = props;

  return (
    <div className={style.movies}>
      {movies.length ? movies.map(movie => {
        return <Movie key={movie.imdbID} {...movie} />
      }) : 'There is nothing'}
    </div>
  )
}

export default Movies;