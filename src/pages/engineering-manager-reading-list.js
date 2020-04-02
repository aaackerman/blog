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
            <span className="icon fa-arrow-left"></span>
          </Link>
        </div>
        <header className="major">
          <h2>Engineering Manager Reading List</h2>
        </header>
        <h3>Books</h3>
        <h3>Articles</h3>
      </section>
    </div>
  </Layout>
)

export default EngineeringManagerPost
