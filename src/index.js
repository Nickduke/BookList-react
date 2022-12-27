import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const author = 'Michelle Obama';
const title = 'The Light We Carry: Overcoming in Uncertain Times';
const img = './images/book1.jpeg';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt='The Light We Carry: Overcoming in Uncertain Times' />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
