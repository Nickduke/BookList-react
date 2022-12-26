import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return (
    <div>
      <Book />
      <Book />
      <Book />
      <Book />
    </div>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/91MowzF+WZL._AC_UL600_SR600,400_.jpg'
    alt='The Light We Carry: Overcoming in Uncertain Times'
  />
);
const Title = () => <h2>The Light We Carry: Overcoming in Uncertain Times</h2>;
const Author = () => <p>Michelle Obama</p>;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
