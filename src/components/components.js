// /src/components.js

import React from 'react';
import { Link } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes from './routes';



function Breadcrumb  ({ locationPath, onMatchedRoutes }) {
    let matchedRoutes = matchRoutes(routes, locationPath);
  
    if (typeof onMatchedRoutes === 'function') {
      matchedRoutes = onMatchedRoutes(matchedRoutes);
    }
  
    return (
      <nav aria-label="breadcrumb "  >
        <ol className="breadcrumb px1140">
          {matchedRoutes.map((matchRoute, i) => {
            const { path, breadcrumbName } = matchRoute.route;
            const isActive = path === locationPath;
  
            return isActive ? (
              <li key={i} className="breadcrumb-item active" aria-current="page">
                {breadcrumbName}
              </li>
            ) : (
              <li key={i} className="breadcrumb-item" aria-current="page">
                <Link to={path}>{breadcrumbName} </Link>
              </li>
            );
          })}
        </ol>
      </nav>
    );
  };
  
  export { Breadcrumb };