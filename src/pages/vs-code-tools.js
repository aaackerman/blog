import React from 'react'
import Helmet from 'react-helmet'
import { Link } from '@reach/router'
import Layout from '../components/layout'

const VsCodePost = () => (
  <Layout>
    <Helmet>
      <title>VS Code Tools</title>
      <meta
        name="description"
        content="A list of VS code tools that have helped me along the way."
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
          <h2>VS Code Tools</h2>
        </header>
        <h3>Plugins</h3>
        <h3>Fonts</h3>
      </section>
    </div>
  </Layout>
)

export default VsCodePost
