import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import md5 from "md5";

import "./styles.scss";

import { api } from "../../services/api";

const publicKey = "1846a1f01be4d50eda85a9cf893b46eb";
const privateKey = "d2fd8d912397a25a31516139afd6f527bcc71261";

const time = Number(new Date());
const hash = md5(time + privateKey + publicKey);

const CharDetails = () => {
  const [char, setChar] = useState([]);
  const [hero, setHero] = useState([]);

  const charId = window.location.pathname.replace("/chardetails", "");
  let history = useHistory();

  useEffect(() => {
    if (charId) {
      const loadHero = async () => {
        const response = await fetch(
          `${api}/characters${charId}?ts=${time}&apikey=${publicKey}&hash=${hash}`
        );
        const data = await response.json();

        setHero(data.data.results[0]);
      };
      loadHero();
    }
  }, [charId]);
  useEffect(() => {
    if (charId) {
      const loadChar = async () => {
        const dataComic = await fetch(
          `${api}characters/${charId}/series?ts=${time}&apikey=${publicKey}&hash=${hash}&limit=10`
        );
        const apidata = await dataComic.json();
        setChar(apidata.data.results);
      };
      loadChar();
    }
    
  }, [charId]);
  const comeBack = () => {
    history.push("/");
  };

  return (
    <div className="char_details__container">
      <h1>{hero.name}</h1>
      <img
        src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`}
        alt="charlogo"
        className="char_details__img"
      />
      <p>{char.description}</p>

      {hero?.comics?.items?.length > 1 ? (
        <h3>{`Sagas  relacionadas ao personagem ${hero.name}`} </h3>
      ) : (
        <h3>Não a dados para exibir</h3>
      )}
      <ul className="char_details__grid">
        {char?.slice(0, 12).map((item) => {
          return (
            <li key={item.id}>
              <div className="char_details__comic_details">
                <p> {item.title}</p>

                <img
                  src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
                  alt="ComicImg"
                />
              </div>
            </li>
          );
        })}
      </ul>
      <button onClick={comeBack}>Voltar</button>
    </div>
  );
};

export default CharDetails;
