import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logoimage } from './images/logo-white.svg';
import { siteConfig } from 'settings';

export const Logo = ({ collapsed }) => (
  <div className="dlLogoWrapper">
    {collapsed ? (
      <div>
        <h3>
          <Link to="/dashboard">
            <Logoimage alt="logo" style={{ paddingRight: '12px', verticalAlign: 'middle' }} />
          </Link>
        </h3>
      </div>
    ) : (
      <h3>
        <Link to="/dashboard">
          <Logoimage alt="logo" style={{ paddingRight: '12px', verticalAlign: 'middle' }} />
          <span style={{ paddingRight: '12px', verticalAlign: 'middle' }}>
            {siteConfig.siteName}
          </span>
        </Link>
      </h3>
    )}
  </div>
);
