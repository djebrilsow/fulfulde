import React from 'react'
import Layout from '../components/Layout/Layout'
import comp from '../assets/comp.jpg'

export default function Policy() {
  return (
   <Layout title={'Eeraango'}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src= {comp}
            alt="contactus"
            style={{ width: "100%", height: '200px' }}
          />
        </div>
        <div className="col-md-4">
          <p>Eeraango fayde e sukaaɓe leñol yoo njanngu neeniwal mumen</p>
          <p>Yo ɓe njanngu gannde kese</p>
          <p>Artirde gannde e karalle kese e nehaande men</p>
          <p>Yiɗde ɗemngal mum, pinal mum e renndo mum</p>
        </div>
      </div>
   </Layout>
  )
}
