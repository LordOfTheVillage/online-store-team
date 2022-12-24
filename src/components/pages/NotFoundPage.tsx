import React, {FC} from 'react'
import { NavLink } from 'react-router-dom'

export const NotFoundPage: FC = () => {
  return (
    <div>
      <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        <div>
          <h3>
            &#8222;Жыві і цэльнасці шукай, aб шыраце духоўнай дбай...&#8221;
          </h3>
          <span >&#169; Максім Багдановіч</span>
        </div>
      </div>
      <NavLink to="/">
        To home
      </NavLink>
    </div>
  )
}