import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const NotFoundPage: FC = () => {
  return (
    <div style={{ marginTop: '10rem', marginLeft: '15rem', fontSize: '2rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '6rem' }}>404</h1>
        <h2 style={{ fontSize: '4rem', marginBottom: '3rem' }}>Page not found</h2>
        <div>
          <h3 style={{ marginBottom: '1rem' }}>&#8222;Жыві і цэльнасці шукай, aб шыраце духоўнай дбай...&#8221;</h3>
          <span style={{ marginBottom: '1rem', marginLeft: '25rem' }}>&#169; Максім Багдановіч</span>
        </div>
      </div>
      <NavLink to="/" style={{ padding: '1rem', borderRadius: '2px' }} className="btn">
        To home page
      </NavLink>
    </div>
  );
};
