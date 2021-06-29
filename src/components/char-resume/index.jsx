import React from "react";
import {useHistory} from "react-router-dom";

import "./styles.scss";

const CharResume = ({ characters }) => {
  let history = useHistory();

  return (
    <div className="char__container">
      <table cellSpacing="10">
        <thead>
          <tr className="char__content_label">
            <th>Personagens</th>
            <th className="char__content_title">Séries</th>
            <th className="char__content_title">Eventos</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char) => {
            const goToDetails = () => {
             history.push(`/chardetails/${char.id}`);
            };
            return (
              <tr onClick={goToDetails} className="char__content" key={char.id}>
                <td>
                  <img
                    src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                    alt="avatar"
                  />
                  <strong>{char.name}</strong>
                </td>
                <td className="char__content__series_container">
                  {char.series.items.slice(0, 3).map((series) => {
                    return <p key={series.id}>{series.name}</p>;
                  })}
                </td>

                <td className="char__content__series_container">
                  {char.events.items.slice(0, 3).map((events) => {
                    return <p key={events.id}>{events.name}</p>;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CharResume;
