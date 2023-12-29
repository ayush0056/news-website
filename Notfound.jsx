import React from 'react'
import { Link } from 'react-router-dom'

export const Notfound = () => {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Sorry, the page you are looking for does not exist.</p>

        <p>Go to the <Link to='/'>Homepage</Link>.</p>
    </div>
  )
}
