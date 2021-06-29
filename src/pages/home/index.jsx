import { useState, useEffect } from "react";

import CharResume from "../../components/char-resume";

import md5 from "md5";

import { api } from "../../services/api";

import "./styles.scss";
import Footer from "../../components/footer";

const HomePage = () => {
  const [characters, setCharacteres] = useState([]);
  const [total, setTotal] = useState([]);
  const [offset, setOffset] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const publicKey = "1846a1f01be4d50eda85a9cf893b46eb";
  const privateKey = "d2fd8d912397a25a31516139afd6f527bcc71261";

  const time = Number(new Date());
  const hash = md5(time + privateKey + publicKey);

  const LIMIT = 10;

  useEffect(() => {
    async function load() {
      setCharacteres([]);
      if (inputValue === "") {
        const response = await fetch(
          `${api}characters?ts=${time}&apikey=${publicKey}&hash=${hash}&offset=${offset}&limit=10`
        );
        const data = await response.json();
        setCharacteres(data.data.results);
        setTotal(data.data.total);
      } else {
        const response = await fetch(
          `${api}characters?nameStartsWith=${inputValue}&ts=${time}&apikey=${publicKey}&hash=${hash}&limit=10`
        );
        const data = await response.json();
        setCharacteres(data.data.results);
        setTotal(data.data.total);
      }
    }
    load();
  }, [offset, inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <div className="home__container">
        <div className="home__top_container">
          <h1>Busca de personagens</h1>
          <p>Nome do personagem</p>
          <div className="home__input_container">
            <input
              type="text"
              placeholder="Search"
              onChange={handleInputChange}
              value={inputValue}
            />
          </div>
        </div>

        <CharResume characters={characters} />
      </div>
      {characters && (
        <Footer
          limit={LIMIT}
          total={total}
          offset={offset}
          setOffset={setOffset}
        />
      )}
    </>
  );
};

export default HomePage;
