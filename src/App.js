import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [criteria, setCriteria] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('find movies`');
  }

  function handleChange(e) {
    setCriteria(e.target.value);
  }
  return (
    <section className='section'>
      <div className='container'>
        <h1 className='title'>Movie Search</h1>
        <form className='form'>
          <div className='field'>
            <label className='label'>Name:</label>
            <div className='control'>
              <input
                type='text'
                className='input'
                value={criteria}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='field'>
            <button className='button is-primary'>Search</button>
          </div>
        </form>
        <div className='box'>{criteria}'</div>
      </div>
    </section>
  );
}

export default App;
