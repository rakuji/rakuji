// /src/components.js

import { Link } from 'react-router-dom';
import { matchRoutes } from 'react-router-config';
import routes from './routes';
import "./test.css";
import React, { useEffect } from "react";





function Breadcrumb  ({ locationPath, onMatchedRoutes }) {
    let matchedRoutes = matchRoutes(routes, locationPath);
  
    if (typeof onMatchedRoutes === 'function') {
      matchedRoutes = onMatchedRoutes(matchedRoutes);
    }
  
    return (
      <nav aria-label="container "  >
        <ul className="breadcrumb  px1140 ">
          {matchedRoutes.map((matchRoute, i) => {
            const { path, breadcrumbName } = matchRoute.route;
            const isActive = path === locationPath;
  
            return isActive ? (
              <li key={i} className="breadcrumb-item  active " aria-current="page"  >
                {breadcrumbName}
              </li>
            ) : (
              <li key={i} className="breadcrumb-item test" aria-current="page"  >
                <Link  to={path}>{breadcrumbName} </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };
  
  export { Breadcrumb };