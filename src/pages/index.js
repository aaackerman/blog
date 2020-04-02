import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import PostCard from '../components/PostCard'
import thumbManager from '../assets/images/thumbs/manager.jpg'
import thumbCode from '../assets/images/thumbs/vscode.jpg'

const posts = [
  {
    id: '1',
    path: '/engineering-manager-reading-list',
    thumbnail: thumbManager,
    title: 'Engineering Manager Reading List',
    description:
      'Books, articles and more that have helped me with engineering management.',
    date: '4.2.2020',
  },
  {
    id: '2',
    path: '/vs-code-tools',
    thumbnail: thumbCode,
    title: 'VSCode Tools',
    description: 'A list of VS code tools that have helped me along the way.',
    date: '4.2.2020',
  },
]

const PostsList = () => posts.map((props) => <PostCard {...props} />)

const Index = () => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>About</h2>
          </header>
          <p>
            I'm an NYC based web developer and engineering manager who nerds out
            crafting teams and high-quality software that solves problems for
            people. I build test-driven Ruby on Rails web applications with
            frontend JavaScript frameworks like React.
          </p>
          <p>
            Ruby is my expertise and I'm actively improving my JavaScript
            skills. My recent posts will include learnings in this journey.
          </p>
          <p>
            Life is more than work. I also stream video games every Sunday on{' '}
            <a href="http://twitch.tv/alexiconz" target="_blank">
              Twitch
            </a>{' '}
            and can be found at the gym 5-6 times a week. Let's talk gaming and
            fitness too.
          </p>
        </section>

        <section id="two">
          <h2>Recent Posts</h2>
          <div className="row">
            <PostsList />
          </div>
          {/* <ul className="actions">
            <li>
              <a href="/posts" className="button">
                View older posts
              </a>
            </li>
          </ul> */}
        </section>

        <section id="three">
          <h2>Get in touch</h2>
          <div className="row">
            <div className="8u 12u$(small)">
              <form method="post" action="#">
                <div className="row uniform 50%">
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="6u 12u$(xsmall)">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="12u">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="4"
                    />
                  </div>
                </div>
              </form>
              <ul className="actions">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-linkedin">
                    <span className="label">Add me on LinkedIn</span>
                  </h3>
                  <a href="http://linkedin.com/in/aaackerman" target="_blank">
                    /in/aaackerman
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Index
