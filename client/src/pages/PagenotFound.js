import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'

export default function PagenotFound() {
  return (
      <Layout title={'Rutto - Ngoo Hello Woodaani'}>
        <div className='pnf'>
          <h1 className='pnf-title'>404</h1>
        <h2 className='pnf-heading'>Oops! | <br />Ngoo Hello Woodaani</h2>

        <Link to= '/' className='pnf-btn' >
          Rutto Jaɓɓorgo
        </Link>
        </div>
      </Layout>
  )
}
