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
        <p style={{ textAlign: 'center' }}>
          Hello, welcome to my new website. <br />
          I&apos;m currently working on it but for now, check out my{' '}
          <Link to="/blog" style={{ boxShadow: 'none' }}>
            blog
          </Link>
          .
        </p>
        <p>
          {/* TODO: use GraphQL to query these */}
          <a href="https://twitter.com/joshfry">twitter</a>{' '}
          <a href="https://github.com/joshfry">github</a>{' '}
          <a href="https://codepen.io/joshfry">codepen</a>{' '}
          <a href="https://dribbble.com/joshfry">dribbble</a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Index;
