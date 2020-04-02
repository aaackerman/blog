import React from 'react'
import { Link } from '@reach/router'

const PostCard = ({ path, thumbnail, title, description, date }) => (
  <article className="6u 12u$(xsmall) work-item" key={title}>
    <Link className="image fit thumb" to={path}>
      <img src={thumbnail} alt="post thumbnail" />
    </Link>

    <h3>{title}</h3>
    <p>{description}</p>
    <p>
      <b>{date}</b>
    </p>
  </article>
)

export default PostCard
