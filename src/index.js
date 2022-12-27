import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const books = [
  {
    author: 'Michelle Obama',
    title: 'The Light We Carry: Overcoming in Uncertain Times',
    img: './images/book1.jpeg',
    id: 1,
  },
  {
    author: 'James Clear',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    img: './images/book2.jpeg',
    id: 2,
  },
  {
    author: 'Colleen Hoover',
    title: 'It Starts with Us: A Novel (It Ends with Us) ',
    img: './images/book3.jpeg',
    id: 3,
  },
];

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
