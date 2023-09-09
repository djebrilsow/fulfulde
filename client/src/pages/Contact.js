import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import contact from '../assets/computer.jpg'


export default function Contact() {
  return (
    <Layout title={'Jokkorde'}>
         <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src= {contact}
            alt="contactus"
            style= {{ width: "100%", height: "200px" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">JOKKORƊE</h1>
          <p className="text-justify mt-2">
           Ngam jokkondirde e amen, jokkorɗe amen nani ɗoo :
          </p>
          <p className="mt-3">
            <BiMailSend /> : fuloganndiwal@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : +216 56 892 601
          </p>

        </div>
      </div>
    </Layout>
  )
}
