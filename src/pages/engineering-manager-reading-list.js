import React from 'react';
import Helmet from 'react-helmet';
import { Link } from '@reach/router';
import Layout from '../components/layout';

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
            <li>
              <a
                href="https://www.amazon.com/Managers-Path-Leaders-Navigating-Growth/dp/1491973897"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Manager&apos;s Path: A Guide for Tech Leaders Navigating
                Growth and Change
              </a>
            </li>
            <li>
              <a
                href="https://www.amazon.com/Making-Manager-What-Everyone-Looks/dp/0735219567"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Making of a Manager: What to Do When Everyone Looks to You
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Articles</h2>
          <ul>
            <li>
              <a
                href="https://larahogan.me/blog/benefits-offering-challenges/"
                target="_blank"
                rel="noopener noreferrer"
              >
                How to Offer Challenges to your Teammates
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Learning Resources</h2>
          <p>
            <i>A few online tools to help your coworkers grow their skills.</i>
          </p>
          <li>
            <a
              href="https://frontendmasters.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Frontend Masters:
            </a>{' '}
            great for going in-depth in modern JavaScript and front-end
            engineering technologies.
          </li>
          <li>
            <a
              href="https://frontendmasters.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pluralsight
            </a>{' '}
            wider array of topics .
          </li>
        </div>
      </section>
    </div>
  </Layout>
);

export default EngineeringManagerPost;
