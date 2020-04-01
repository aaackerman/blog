import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                target="_blank"
                href="https://www.github.com/aaackerman"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/alexiconz"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitch.tv/alexiconz"
                className="icon fa-twitch"
              >
                <span className="label">Twitch</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
