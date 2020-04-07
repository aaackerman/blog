import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import PostCard from '../components/PostCard';
import ContactForm from '../components/ContactForm';
import thumbManager from '../assets/images/thumbs/manager.jpg';
import thumbCode from '../assets/images/thumbs/vscode.jpg';

const posts = [
  {
    id: '1',
    path: '/engineering-learning-list',
    thumbnail: thumbManager,
    title: 'Engineering Learning List',
    description:
      'Books, articles and more that have helped me with engineering management.',
    date: '4.2.2020'
  },
  {
    id: '2',
    path: '/vs-code-tools',
    thumbnail: thumbCode,
    title: 'VS Code Tools',
    description: 'A list of VS code tools that have helped me along the way.',
    date: '4.2.2020'
  }
];

const PostsList = () => posts.map((props) => <PostCard {...props} />);

const Index = () => {
  const siteTitle = 'Alex Ackerman';
  const siteDescription =
    'Alex is an NYC based web developer and engineering manager.';

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
            I&apos;m an NYC based web developer and engineering manager who
            nerds out crafting teams and high-quality software that solves
            problems for people. I build test-driven Ruby on Rails web
            applications with frontend JavaScript frameworks like React.
          </p>
          <p>
            Ruby is my expertise and I&apos;m actively improving my JavaScript
            skills. My recent posts will include learnings in this journey.
          </p>
          <p>
            Life is more than work. I also stream video games every Sunday on{' '}
            <a
              href="http://twitch.tv/alexiconz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitch
            </a>{' '}
            and can be found at the gym 5-6 times a week. Let&apos;s talk gaming
            and fitness too.
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
          <ContactForm />
        </section>
      </div>
    </Layout>
  );
};

export default Index;
