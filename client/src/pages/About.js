import React from 'react'
import Layout from '../components/Layout/Layout'
import about from '../assets/about.jpg'

export default function About() {
  return (
    <Layout title={'Heɓtinirde - Ful_Kel'}>
         <div className="row contactus mb-3" id="heɓ">
        <div className="col-md-6 ">
          <img
            src= {about}
            alt="contactus"
            style={{ width: "100%", height: '200px' }}
          />
        </div>
        <div className="col-md-4 card  bg-dark" >
          <p className="text-justify mt-2 text-white">
            _________________________________________________________ <br/>
          Ful_Kel ko keltagol kelme ɗiɗe ɓasondiraaɗe: Fulo e Kelmeendi. <br />
          Ko hello nder geese  fulfulde, faandaare maggo ko renndinde kelme ganndine pulaaɗe. <br/>
          ___________________________________________________________ <br />
          Ngoo hello ina weeɓtinana ɓeen wiɗtooɓe maa winndooɓe gannde kese e fulfulde.


          </p>
        </div>
      </div>
    </Layout>
  )
}
