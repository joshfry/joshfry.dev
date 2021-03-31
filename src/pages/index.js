import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/seo';
import './index.css';

const Index = () => {
  return (
    <React.Fragment>
      <SEO />
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '2em',
        }}
      >
        <h1 style={{ marginTop: '0' }}>
          joshfry
          <Link to="/blog" style={{ boxShadow: 'none' }}>
            .dev
          </Link>
        </h1>
        <p>
          <a href="https://github.com/joshfry">github</a>{' '}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Index;
