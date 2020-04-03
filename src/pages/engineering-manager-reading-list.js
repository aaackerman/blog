import React from 'react'
import Helmet from 'react-helmet'
import { Link } from '@reach/router'
import Layout from '../components/layout'

const EngineeringManagerPost = () => (
  <Layout>
    <Helmet>
      <title>Engineering Manager Reading List</title>
      <meta
        name="description"
        content="Books, articles and more that have helped me with engineering management."
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
          <h1>Engineering Manager Reading List</h1>
        </header>
        <div>
          <h2>Books</h2>
          <ul>
            <li></li>
          </ul>
        </div>

        <div>
          <h2>Articles</h2>
          <ul>
            <li></li>
          </ul>
        </div>

        <div>
          <h2>Learning Resources</h2>
          <p>
            <a
              href="https://frontendmasters.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Masters
            </a>{' '}
            is great for going in-depth in modern JavaScript and front-end
            engineering technologies.
          </p>
          <p>
            <a
              href="https://frontendmasters.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pluralsight
            </a>{' '}
          </p>
        </div>
      </section>
    </div>
  </Layout>
)

export default EngineeringManagerPost
