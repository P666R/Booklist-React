import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81fyoFoaxlL._AC_UL600_SR600,400_.jpg"
    alt="img"
  />
);

const Title = () => {
  return <h2>Dog Man: Twenty Thousand Fleas Under the Sea</h2>;
};

const Author = () => {
  return <h4>Dav Pilkey</h4>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
