import React from "react";


import "./styles.scss";
const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Footer = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }
  
    return (
      <footer className="home__footer_container">
        <ul className="pagination">
          <li>
            <button
              onClick={() => onPageChange(current - 1)}
              disabled={current === 1}
            >
              Anterior
            </button>
          </li>
          {Array.from({ length: Math.min(MAX_ITEMS, pages) })
            .map((_, index) => index + first)
            .map((page) => (
              <li key={page}>
                <button className="pagination__button"
                  onClick={() => onPageChange(page)}
                  className={
                    page === current ? "pagination__item--active" : null
                  }
                >
                  {page}
                </button>
              </li>
            ))}
          <li>
            <button 
              onClick={() => onPageChange(current + 1)}
              disabled={current === pages}
            >
              Próxima
            </button>
          </li>
        </ul>
      </footer>
    );
  };


export default Footer;
