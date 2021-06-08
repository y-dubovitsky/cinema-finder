import style from './Movie.module.css';

function Movie(props) {
  const {
    Title: title,
    Year: year,
    imdbID: imdbID,
    Type: type,
    Poster: poster
  } = props;

  return (
    <div id={imdbID} className="movie">
      <div className="row">
        <div className="col s12 m7">
          <div className="card">
            <div className="card-image">
              <img src={poster}/>
              <span className="card-title">{title}</span>
            </div>
            <div className="card-content">
              <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
            </div>
            <div className="card-action">
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movie;