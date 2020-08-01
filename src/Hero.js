import React from "react";
import hometext from "./homeText.css";

export default function Hero() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-7">
          <img
            src="https://lachatupdate.files.wordpress.com/2015/08/stieg-larsson_36141.jpg"
            alt="Stieg Larsson"
            style={{ width: "100%" }}
          ></img>
        </div>
        <div className="col-sm-5">
          <h3 className="hometext">
            Karl Stig-Erland "Stieg" Larsson was a Swedish journalist and
            writer. He is best known for writing the Millennium trilogy of crime
            novels, which were published posthumously, starting in 2005, after
            the author died suddenly of a heart attack. The trilogy was adapted
            as three motion pictures in Sweden, and one in the U.S. (for the
            first book only). The publisher commissioned David Lagercrantz to
            expand the trilogy into a longer series, which has six novels as of
            September 2019. For much of his life, Larsson lived and worked in
            Stockholm. His journalistic work covered socialist politics and he
            acted as an independent researcher of right-wing extremism.
          </h3>
          <p className="moreabout">More about Stieg</p>
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
              Swedish journalist and writer. He is best known for writing the
              Millennium trilogy of crime novels, which were published
              posthumously, starting in 2005, after the author died suddenly of
              a heart attack. The trilogy was adapted as three motion pictures
              in Sweden, and one in the U.S. (for the first book only). The
              publisher commissioned David Lagercrantz to expand the trilogy
              into a longer series, which has six novels as of September 2019.
              For much of his life, Larsson lived and worked in Stockholm. His
              journalistic work covered socialist politics and he acted as an
              independent researcher of right-wing extremism.
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}
