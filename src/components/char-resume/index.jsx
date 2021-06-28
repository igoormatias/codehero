import React from "react";

import "./styles.scss";

const CharResume = ({ characters }) => {
  // console.log("veio da api haha", characters);

  /*   const series = characters?.series?.items?.slice(0, 2);  */
  /* 
  console.log('SERIE', series); */

  return (
    <div className="char__container">
      <table cellSpacing="10">
        <tr className="char__content_label">
          <th>Personagens</th>
          <th className="char__content_title">Séries</th>
          <th className="char__content_title">Eventos</th>
        </tr>
        {characters.map((char) => {
          return (
            <tr className="char__content" key={char.id}>
              <td >
                <img
                  src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
                  alt="avatar"
                />
                <strong>{char.name}</strong>
              </td>
              <td className="char__content__series_container">
                {char.series.items.slice(0, 3).map((series) => {
                  return <p key={series.name}>{series.name}</p>;
                })}
              </td>

              <td className="char__content__series_container">
                {char.events.items.slice(0, 3).map((events) => {
                  return <p key={events.name}>{events.name}</p>;
                })}
              </td>
            </tr>
          );
        })}
      </table>
      {/*  {characters.map((char) => {
        return (
          <div key={char.id} className="char__content">
            <img
              src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
              alt="avatar"
            />
            <strong>{char.name}</strong>
            <div className="char__content__series_container">
              {char.series.items.slice(0, 3).map((series) => {
                return <p key={series.name}>{series.name}</p>;
              })}
            </div>
            <div className="char__content__series_container">
              {char.events.items.slice(0, 3).map((events) => {
                return <p key={events.name}>{events.name}</p>;
              })}
            </div>
          </div>
        );
      })} */}
    </div>
  );
};

export default CharResume;
