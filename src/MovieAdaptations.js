import React from "react";
import hometext from "./homeText.css";
import moviesDB from "./MoviesDB";

export default function MovieAdaptations() {
  return (
    <div>
      <h3 className="hometext">Film Adaptations</h3>
      <div className="row">
        {moviesDB.map(
          ({
            title,
            id,
            img,
            description,
            director,
            cast,
            year,
            country,
            trailer,
          }) => (
            <div className="col-sm-6" key={id}>
              <div className="card">
                <img src={img} className="card-img-top" alt={title}></img>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p>Cast: {cast}</p>
                  <p>Director: {director}</p>
                  <p>
                    Producttion: {year}, {country}
                  </p>
                  <a href={trailer} className="btn btn-primary">
                    Watch The Trailer
                  </a>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
