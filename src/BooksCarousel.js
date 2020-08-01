import React from "react";
import bookDB from "./booksDB";

export default function BooksCarousel() {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {bookDB.map(({ title, id, img }) => (
            <div className="carousel-item active">
              <img
                key={id}
                src={img}
                className="d-block w-100"
                alt={title}
              ></img>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

/*{bookDB.map(({ title, id, img }) => (
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img} className="d-block w-100" alt={title}></img>
            </div>
          </div>
        ))}*/

/*<div className="carousel-item active">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81UhKOBDrCL.jpg"
              className="d-block w-100"
              alt="the girl with the dragon tattoo"
            ></img>
          </div>*/