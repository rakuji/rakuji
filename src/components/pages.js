// /src/pages.js

import React from 'react';
import { Breadcrumb } from './components';
import { renderRoutes } from 'react-router-config';




/**
 * These are root pages
 */
 const Index = () => {
    
  };

  const Home = ({ location }) => {
    return (
      <div>
        
        <Breadcrumb locationPath={location.pathname} />
      </div>
    );
  };
  
  const About = ({ location }) => {
    const onMatchedRoutes = (matchedRoutes) => {
      return [
        {
          route: {
            path: '/',
            breadcrumbName: '首頁'
          }
        },
        ...matchedRoutes
      ];
    };
  
    return (
      <div>
        
        <Breadcrumb
          locationPath={location.pathname}
          onMatchedRoutes={onMatchedRoutes}
        />
      </div>
    );
  };

  const Booking = ({ location }) => {
    const onMatchedRoutes = (matchedRoutes) => {
      return [
        {
          route: {
            path: '/',
            breadcrumbName: '首頁'
          }
        },
        ...matchedRoutes
      ];
    };
  
    return (
      <div>
        
        <Breadcrumb
          locationPath={location.pathname}
          onMatchedRoutes={onMatchedRoutes}
        />
      </div>
    );
  };

  const Newslist = ({ location }) => {
    const onMatchedRoutes = (matchedRoutes) => {
      return [
        {
          route: {
            path: '/',
            breadcrumbName: '首頁'
          }
        },
        ...matchedRoutes
      ];
    };
  
    return (
      <div>
        
        <Breadcrumb
          locationPath={location.pathname}
          onMatchedRoutes={onMatchedRoutes}
        />
      </div>
    );
  };

  const Products = ({ location }) => {
    const onMatchedRoutes = (matchedRoutes) => {
      return [
        {
          route: {
            path: '/',
            breadcrumbName: '首頁'
          }
        },
        ...matchedRoutes
      ];
    };
  
    return (
      <div>
        
        <Breadcrumb
          locationPath={location.pathname}
          onMatchedRoutes={onMatchedRoutes}
        />
      </div>
    );
  };

// ...

const recipes = ({ route, location }) => {
    // Provide a function as props into <Breadcrumb /> to modify breadcrumb
    const onMatchedRoutes = (matchedRoutes) => {
      return [
        {
          route: {
            path: '/',
            breadcrumbName: '首頁'
          }
        },
        ...matchedRoutes
      ];
    };
    return (
        <div>
          
    
          {/* Pass onMatchedRoutes function as props here */}
          <Breadcrumb
            locationPath={location.pathname}
            onMatchedRoutes={onMatchedRoutes}
          />
    
          {renderRoutes(route.routes)}
        </div>
      );
    };

    const box = ({ route, location }) => {
      // Provide a function as props into <Breadcrumb /> to modify breadcrumb
      const onMatchedRoutes = (matchedRoutes) => {
        return [
          {
            route: {
              path: '/',
              breadcrumbName: '首頁'
            }
          },
          ...matchedRoutes
        ];
      };

      };

      const Store = ({ location }) => {
        const onMatchedRoutes = (matchedRoutes) => {
          return [
            {
              route: {
                path: '/',
                breadcrumbName: '首頁'
              }
            },
            ...matchedRoutes
          ];
        };
      
        return (
          <div>
            
            <Breadcrumb
              locationPath={location.pathname}
              onMatchedRoutes={onMatchedRoutes}
            />
          </div>
        );
      };
  
  // ...

/**
 * These are pages nested in Electronics
 */
 const Mobile = (props) => {
    console.log('props in Mobile', props);
    return <h3>Mobile Phone</h3>;
  };

const Desktop = () => {
  
};

const Laptop = () => {
  
};


export {Home, About, Booking, Newslist, Products, recipes, Mobile, box , Store};