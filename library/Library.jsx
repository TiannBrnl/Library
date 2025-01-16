import React from 'react';
import './library.css';
import history1 from '../../assets/history1.jpeg';
import history2 from '../../assets/history2.jpeg';
import history3 from '../../assets/history3.jpg';
import history4 from '../../assets/history4.jpeg';
import history5 from '../../assets/history5.jpeg';
import math1 from '../../assets/math1.jpeg';
import math2 from '../../assets/math2.jpeg';
import math3 from '../../assets/math3.jpeg';
import math4 from '../../assets/math4.jpeg';
import math5 from '../../assets/math5.jpg';
import tech1 from '../../assets/tech1.jpeg';
import tech2 from '../../assets/tech2.jpeg';
import tech3 from '../../assets/tech3.jpeg';
import tech4 from '../../assets/tech4.jpeg';
import tech5 from '../../assets/tech5.jpeg';
import search from '../../assets/search.png';

function Library() {
  const books = [math1, math2, math3, math4, math5];
  const historyBooks = [history1, history2, history3, history4, history5];
  const techBooks = [tech1, tech2, tech3, tech4, tech5];

  return (
    <section id='books-section'>
      <div className='search-bar'>
        <input type='text' placeholder='Search for books...' />
        <img src={search} alt='Search' />
      </div>
      <div className='slider'>
        <h2>Mathematics</h2>
        <div className='books-container'>
          {books.map((book, index) => (
            <div className='book' key={index}>
              <img src={book} alt={`Book ${index + 1}`} />
              <button className='read-button'>Read</button>
            </div>
          ))}
        </div>
      </div>
      <div className='slider'>
        <h2>History</h2>
        <div className='books-container'>
          {historyBooks.map((book, index) => (
            <div className='book' key={index}>
              <img src={book} alt={`Book ${index + 1}`} />
              <button className='read-button'>Read</button>
            </div>
          ))}
        </div>
      </div>
      <div className='slider'>
        <h2>Programming</h2>
        <div className='books-container'>
          {techBooks.map((book, index) => (
            <div className='book' key={index}>
              <img src={book} alt={`Book ${index + 1}`} />
              <button className='read-button'>Read</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Library;