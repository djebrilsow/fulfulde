import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
        <h1 className='text-center'>
            Pulaar Ngal Dimal
        </h1>
        <p className='text-center mt-3'>
          <Link to="/about">Heɓtinirde</Link> |
          <Link to="/contact">Jokkorde</Link> |
          <Link to="/policy">Eeraango</Link>
        </p>
    </div>
  )
}
