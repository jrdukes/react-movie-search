import React, { useState } from 'react';
import { map } from 'ramda';
// import logo from './logo.svg';
import './App.css';

const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJNb3ZpZSBTZWFyY2giLCJpYXQiOjE0OTg5MDkwMDYsImV4cCI6MTU5MzYwMzQwNiwiYXVkIjoibW92aWUtc2VhcmNoLmpycy5jYW1wIiwic3ViIjoibW92aWUtc2VhcmNoIn0.-U--gAcHA3rmbVIXYN-3fnhC37FuQa4KrXpmZG3D0G8';

function searchMovies(criteria) {
  return fetch('https://movie-search.jrs.camp?q=' + encodeURI(criteria), {
    headers: {
      authorization: 'Bearer ' + token
    }
  }).then(response => response.json);
}

function App() {
  const [criteria, setCriteria] = useState('');
  const [results, setResults] = useState([]);
  const [fromState, setValidState] = useState({ empty: true, valid: true });

  function handleSubmit(e) {
    e.preventDefault();
    // console.log('find movies');
    // // call an api with criteria to get a list of movies
    searchMovies(criteria)
      .then(v => {
        console.log(v);
      })
      .then(searchResults => setResults(searchResults.Search));
  }

  function handleChange(e) {
    setCriteria(e.target.value);

    function validate() {
      if (criteria.length > 0) {
        if (criteria.toLowerCase() === 'cloverfield') {
          setValidState;
        }
      }
    }
  }
  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <h1 className='title'>Movie Search</h1>
            <form className='form' onSubmit={handleSubmit}>
              <div className='field'>
                <label className='label'>Name:</label>
                <div className='control'>
                  <input
                    type='text'
                    className='input'
                    value={criteria}
                    onChange={handleChange}
                    onBlur={validate}
                  />
                </div>
                <div className='help'>Please enter a name of a movie</div>
              </div>
              <div className='field'>
                <button className='button is-primary' type='submit'>
                  Search
                </button>
              </div>
            </form>
            <div className='box'>
              <ul>{map(li, results)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function li(movie) {
  return <li key={movie.imdbID}>{movie.Title}</li>;
}

export default App;
