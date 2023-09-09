import React, { useEffect, useState } from 'react';
import AdminMenu from '../../components/Layout/AdminMenu';
import Layout from '../../components/Layout/Layout';
import  toast  from 'react-hot-toast';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import logo from '../../assets/logo1.jpg'
import {AiTwotoneDelete} from 'react-icons/ai'
import {GrUpdate} from 'react-icons/gr'

const Products = () => {
 
    const [products, setProducts] = useState([])
    const [total, setTotal] = useState("")


    // get all products
    const getAllProducts = async () => {
        try {
            const {data} = await axios.get('/api/v1/product/get-product')
            setTotal(data.countTotal)
            setProducts(data.products)
            
        } catch (error) {
            console.log(error)
            // toast.error('Somthing went wrong')
        }
    }
    // lifecycle methode
    useEffect(() => {
        getAllProducts()
    }, [getAllProducts()])

      //delete a product
  const handleDelete = async (id) => {
    try {
      let answer = window.confirm("Aɗa yiɗi momtude ?")
      if (answer){
      const { data } = await axios.delete(
        `/api/v1/product/delete-product/${id}`
      )
      toast.success("Helmere ndee momtaama");
    }
    } catch (error) {
      console.log(error);
      toast.error("Waɗii caɗeele");
    }
  };



    return (
        <Layout title= {"Kelme Pulaaɗe - Ful_Kel" }>
            <div className='row'>
                <div className='col-md-3'>
                    <AdminMenu />
                </div>
                <div className='col-md-9 '>
                    <h1 className='text-center'> Kuuɓal kelme Goodaaɗe : {total} </h1>
                    <div className='d-flex flex-wrap'>
                    {products?.map(p => {
                        return(
                           
                            <div  key={p._id} className='product-link'>
                            <div className="card m-2 p-1" style={{width: '18rem'}} >
                                <img src={logo} className="card-img-top" alt= {p.slug} style={{width: 45}}/>
                                <div className="card-body">
                                    <h3 className="card-title text-green"> {p.french} </h3>
                                    <h4 className="card-text text-success"> {p.peul} </h4>
                                    <h4 className="card-text"> {p.english} </h4>
                                </div>
                                <AiTwotoneDelete onClick={(e) => {handleDelete(p._id)} } />
                                
                                    <Link to={`/dashboard/admin/product/${p.slug}`}><GrUpdate/></Link>
                                
                            </div>
                            
                            </div>
                           

                        )
                    }
                    )}
                    </div>
                    
                </div>
                
            </div>
        </Layout>
    )
}

export default Products