import React from "react";
import hometext from "./homeText.css";
import BooksCarousel from "./BooksCarousel";
import ArrowDown from "./img/arrowdown.jpg";
import MovieAdaptations from "./MovieAdaptations.js";

export default function Hero() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6">
          <img
            className="heroImage"
            src="https://lachatupdate.files.wordpress.com/2015/08/stieg-larsson_36141.jpg"
            alt="Stieg Larsson"
          ></img>
        </div>
        <div className="col-sm-6">
          <h1 className="display-2 hometext" style={{ textAlign: "center" }}>
            Stieg Larsson
          </h1>
          <h4 className="hometext">
            Karl Stig-Erland "Stieg" Larsson was a Swedish journalist and
            writer. He is best known for writing the Millennium trilogy of crime
            novels, which were published posthumously, starting in 2005, after
            the author died suddenly of a heart attack. The trilogy was adapted
            as three motion pictures in Sweden, and one in the U.S. For much of
            his life, Larsson lived and worked in Stockholm. His journalistic
            work covered socialist politics and he acted as an independent
            researcher of right-wing extremism.
          </h4>
          <div style={{ textAlign: "center" }}>
            <p className="moreabout"> More about Stieg </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <img src={ArrowDown} alt="arrow"></img>
          </div>

          <p style={{ textAlign: "center" }}>
            <em>
              Karl Stig-Erland "Stieg" Larsson was a Swedish journalist and
              writer. He is best known for writing the Millennium trilogy of
              crime novels, which were published posthumously, starting in 2005,
              after the author died suddenly of a heart attack. The trilogy was
              adapted as three motion pictures in Sweden, and one in the U.S.
              (for the first book only). The publisher commissioned David
              Lagercrantz to expand the trilogy into a longer series, which has
              six novels as of September 2019. For much of his life, Larsson
              lived and worked in Stockholm. His journalistic work covered
              socialist politics and he acted as an independent researcher of
              right-wing extremism. Karl Stig-Erland "Stieg" Larsson was a
            </em>
          </p>
          <h4 className="hometext">Millennium Trilogy Collection</h4>
          <BooksCarousel />
          <MovieAdaptations />
        </div>
      </div>
    </div>
  );
}
