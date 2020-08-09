import React from 'react';

// local imports
import './Layout.scss';

const Layout = ({ children }) => {
  return ( 
    <div className="layout">
      {React.Children.map(children, child => (
        <div className="section">
           {React.cloneElement(child)}
        </div>
      ))}
    </div>
   );
}
 
export default Layout;