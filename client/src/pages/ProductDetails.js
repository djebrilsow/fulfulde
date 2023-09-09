import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import logo from '../assets/logo1.jpg'

const ProductDetails = () => {
    const params = useParams()
    const [product, setProduct] = useState({})
    const [relatedProduct, setRelatedProduct] = useState([])
    const navigate = useNavigate()

    // initial details
    useEffect(() =>  {
        if(params?.slug) getProduct()

    }, [params?.slug])

    
    // similar product
    const getSimilarProduct = async (pid, cid) => {
        try {
            const {data} = await axios.get(`/api/v1/product/related-product/${pid}/${cid}`)
            setRelatedProduct(data?.product)
            console.log(relatedProduct)
        } catch (error) {
            console.log(error)
        }
    }

    // get product
    const getProduct = async () => {
        try {
            const {data} = await axios.get(`/api/v1/product/get-product/${params.slug} `)
            setProduct(data?.product)
            getSimilarProduct(data?.product._id, data?.product.category._id)
            
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <Layout>
       <div className="row container mt-2">
        <div className='col-md-6'>
        <img 
        src={logo} 
        className="card-img-top" 
        alt= {product.slug} 
        height= '300'
        width={'350px'}
        />
        </div>
        <div className='col-md-6'>
            <h1 className='text-center'>Keɓe Helmere ndee</h1>
            <h5> Farayseere : {product.french} </h5>
            <h5> Pulaar : {product.peul} </h5>
            <h5> Engelee : {product.english} </h5>
            <h5> Lowre : {product.category && product.category.name} </h5>
            
        </div>
       </div>

       <div className='row m-1'>
          <h1>Kelme gaywondirɗe e mayre</h1> 
          {relatedProduct.length < 1 && (<h6 className='bg-danger text-center p-4'>Woodaani kelme gaywondirɗe e mayre</h6>)}
          <div className="d-flex flex-wrap">
        {relatedProduct?.map(p => {
                        return(
                           
                            <div className="card m-2 p-1" style={{ width: '18rem'}} >
                                <img src={logo} className="card-img-top" alt= {p.name} style={{height: 150}} />
                                <div className="card-body">
                                    <h5 className="card-title"> {p.peul} </h5>
                                    <p className="card-text"> {p.french.substring(0,30)} </p>
                                    <p className="card-text">  {p.english} </p>
                                    <button  class="btn btn-primary m-1" onClick={() => navigate(`/product/${p.slug}`)}>Yiy fof</button>
                                   
                                   
                                </div>
                            </div>                           

                        )
                    }
                    )}
        </div>
          
       </div>
    </Layout>
  )
}

export default ProductDetails