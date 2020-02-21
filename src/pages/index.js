import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import './index.css';

const Index = ({ data, location }) => {
  return (
    <React.Fragment>
      <SEO />
      <div
        style={{
          backgroundColor: '#eee',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1 style={{ margin: '0' }}>
          joshfry
          <Link to="/blog" style={{ boxShadow: 'none' }}>
            .dev
          </Link>
        </h1>
      </div>
    </React.Fragment>
  );
};

export default Index;
