import Movie from './movie/Movie';
import style from './Movies.module.css';

function Movies(props) {
  const { movies } = props;

  return (
    <div className={style.movies}>
      {movies.map(movie => {
        return <Movie key={movie.imdbID} {...movie} />
      })}
    </div>
  )
}

export default Movies;