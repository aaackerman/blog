import React from 'react';
import Helmet from 'react-helmet';
import { Link } from '@reach/router';
import Layout from '../components/layout';
import ReadingList from '../components/ReadingList';

const EngineeringManagerPost = () => (
  <Layout>
    <Helmet>
      <title>Engineering Learning List</title>
      <meta
        name="description"
        content="Books, articles and more that have helped me with engineering and management."
      />
    </Helmet>
    <div id="main">
      <section id="one">
        <div className="breadcrumb">
          <Link to="/">
            <span className="icon fa-arrow-left" />
          </Link>
        </div>
        <header className="major">
          <h1>Engineering Learning List</h1>
        </header>
        <div>
          <p>
            Below is a list of books, courses, articles that have helped me with
            engineering and engineering management.
          </p>
        </div>
        <ReadingList />
      </section>
    </div>
  </Layout>
);

export default EngineeringManagerPost;
