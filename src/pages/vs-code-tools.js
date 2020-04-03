import React from 'react'
import Helmet from 'react-helmet'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Link } from '@reach/router'
import Layout from '../components/layout'
import settings from '../assets/code/vs-code-settings'

const SettingsComponent = () => {
  return (
    <SyntaxHighlighter language="json" style={atomDark}>
      {JSON.stringify(settings, null, 2)}
    </SyntaxHighlighter>
  )
}

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
      <section>
        <div className="breadcrumb">
          <Link to="/">
            <span className="icon fa-arrow-left" />
          </Link>
        </div>
        <header className="major">
          <h2>VS Code Tools</h2>
          <p>
            Below is a list of tools that have helped with my productivity in VS
            Code.
          </p>
          <ul>
            <li>
              <a href="#plugins">Plugins</a>
            </li>
            <li>
              <a href="#styles">Themes & Fonts</a>
            </li>
            <li>
              <a href="#tips">Tips</a>
            </li>
            <li>
              <a href="#settings">Settings</a>
            </li>
          </ul>
        </header>
      </section>

      <section id="plugins">
        <h3>Plugins</h3>
        <ul>
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
              target="_blank"
              rel="noopener noreferrer"
            >
              ESLint
            </a>
          </li>
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prettier
            </a>
          </li>
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense"
              target="_blank"
              rel="noopener noreferrer"
            >
              NPM Intellisense
            </a>{' '}
            for autocompletion for npm module imports.
          </li>
        </ul>
      </section>

      <section id="styles">
        <h3>Themes & Fonts</h3>
        <p>Fonts</p>
        <ul>
          <li>
            <a
              href="https://dank.sh/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dank Mono
            </a>{' '}
            in VS code, which supports ligatures and italics.
          </li>
          <li>
            <a
              href="https://github.com/tonsky/FiraCode"
              target="_blank"
              rel="noopener noreferrer"
            >
              FiraCode
            </a>{' '}
            is a free alternative to DankMono.
          </li>
        </ul>

        <p>Themes</p>
        <ul>
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=ryanolsonx.solarized"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solarized Dark
            </a>
          </li>
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material Icon theme
            </a>{' '}
            changes icons in sidebar such as file and folders.
          </li>
          <li>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bracket Pair Colorizer
            </a>
          </li>
        </ul>
      </section>

      <section id="tips">
        <h3>Tips</h3>
        <p>
          <i>Turn off the following:</i>
        </p>
        <ul>
          <li>Mini map</li>
          <li>Open editors = 0</li>
        </ul>
      </section>

      <section id="settings">
        <h3>settings.json</h3>
        <p>
          Below is my settings.json file in VS Code, which enabled ligatures,
          clean up on save, and more.{' '}
        </p>
        <SettingsComponent />
      </section>
    </div>
  </Layout>
)

export default VsCodePost
