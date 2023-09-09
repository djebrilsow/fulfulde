import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { Link, useNavigate } from 'react-router-dom'
import {Select} from 'antd'
import axios from 'axios'
import toast from 'react-hot-toast';
import logo from '../../assets/logo1.jpg'




const {Option} = Select



const CreateProduct = () => {
  const [categories, setCategories] = useState([])
   const [french, setFrench] = useState('')
   const [peul, setPeul] = useState('')
   const [english, setEnglish] = useState('')
   const [category, setCategory] = useState('')
   const [isExisting, setIsExisting] = useState([])
   const navigate = useNavigate()

    // get all
    const getAllCategory = async () => {
      try {
        const {data} = await axios.get('/api/v1/category/get-category')
        if(data?.succes) {
          setCategories(data?.category)
          
        }
        
        
      } catch (error) {
       
        // toast.error('Waɗii caɗeele seeɗa')
      }
    } 
    useEffect(() => {
      getAllCategory();
    }
    , [])

    // Create product
    const createProduct = async () => {
      try{
        const {data} = await axios.post('/api/v1/product/create-product', {
          french, peul, english, category
        })
        console.log(data )
        if(data?.success){
    
          toast.success(data.message)
          setIsExisting(data?.existingLexique)
          setFrench("")
          setPeul("")
          setEnglish("")
        }
        else{
          toast.error(data.message)
        }
        
      }
      catch(error){
        console.log("error")
      }
     
    }


  return (
    <Layout title={'Gollordu - Taf Helmere'}>
        <div className='container-fluid m-3 p-3'>
        <div className='row'>
            <div className='col-md-3'>
                <AdminMenu />
            </div>
            <div className='col-md-9'>
            <h1> Tafgol Helmere</h1>
            <div className='m-1 w-75'>
              <Select bordered= {false} placeholder= "Suɓo Lowre" size='larg' showSearch className='form-select mb-3' onChange={(value) => {setCategory(value)}} >
                {categories?.map(c => {
                  return(
                    <>
                    <Option key={c._id} value= {c._id} > {c.name} </Option>
                    </>
                  )
                })}
              </Select>


                 <div className='mb-3'>
                   <input 
                   type='text' value={french} 
                   placeholder='Winndu helmere Farayseere' 
                   className='form-control' 
                   onChange={(e) => {setFrench(e.target.value)}} />
                 </div>

                 <div className='mb-3'>
                   <input 
                   type='text' value={peul} 
                   placeholder='Winndu helmere Pulaar' 
                   className='form-control' 
                   onChange={(e) => {setPeul(e.target.value)}} />
                 </div>

                 <div className='mb-3'>
                   <input 
                   type='text' value={english} 
                   placeholder='Winndu helmere Englee' 
                   className='form-control' 
                   onChange={(e) => {setEnglish(e.target.value)}} />
                 </div>


                 <div className='mb-3'>
                  <button className='btn btn-primary' onClick={createProduct}> Taf Helmere</button>
                 </div>


            </div>
            </div>
            
        </div>
        </div>

          { isExisting &&  <Link to={`/dashboard/admin/product/${isExisting.slug}`} key={isExisting._id} className='product-link'>
            <div className="card m-2 p-1" style={{width: '18rem'}} >
                <img src={logo} className="card-img-top" alt= {isExisting.slug} style={{width: 45}}/>
                <div className="card-body">
                    <h3 className="card-title text-green"> {isExisting.french} </h3>
                    <h4 className="card-text text-success"> {isExisting.peul} </h4>
                    <h4 className="card-text"> {isExisting.english} </h4>
                </div>
            </div>
            </Link>}
   

        
    </Layout>
  )
}

export default CreateProduct