import React from "react";
import bookDB from "./booksDB";

export default function BooksCarousel() {
  return (
    <>
      <div className="row">
        {bookDB.map(({ title, id, img, discription }) => (
          <div className="col-sm-4" key={id}>
            <div className="card">
              <img src={img} className="card-img-top" alt={title}></img>
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{discription}</p>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
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
