import React, { useEffect, useState } from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import axios from "axios";
import {Checkbox, Radio} from 'antd'
import { toast } from "react-hot-toast";
import { Prices } from "../components/Prices";
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo1.jpg'
import ful from '../assets/fulani.jpg'


const HomePage = () => {
  const [auth, setAuth] = useAuth();
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [checked, setCheked] = useState([])
  const [radio, setRadio] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()



    // get all categories
    const getAllCategory = async () => {
      try {
        const {data} = await axios.get('/api/v1/category/get-category')
        if(data?.succes) {
          setCategories(data?.category)
        }
        console.log(categories)
        
      } catch (error) {
        console.log(error)
        toast.error('Somthing went wrong in getting category')
      }
    }
  
    useEffect(() => {
      getAllCategory();
      getTotal()
    }
    , [])
   

  // get products
  const getAllProducts = async () => {
    try {
      setLoading(true)
      const {data} = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false)
      setProducts(data.products)
      
      
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

    // get Total count
    const getTotal = async () => {
      try {
        const {data} = await axios.get('/api/v1/product/product-count')
        setTotal(data?.total)
        
      } catch (error) {
        console.log(error)
      }
    }

  useEffect(()=>  {
    getAllProducts()
  }, 
  [])



  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked]
    if(value) {
      all.push(id)
    }
    else{
      all = all.filter(c => c !== id)
    }
    setCheked(all)
  };

 
  useEffect(()=> {
   if((!checked.length || !radio.length)) getAllProducts()
  }, 
  [checked.length, radio.length])

  useEffect(() => {
    if(checked.length || radio.length) filterProduct()
  }, 
  [checked, radio])

  // get filter product
  const filterProduct = async () => {
    try {
      const {data} = await axios.post('api/v1/product/product-filters', {checked, radio})
      setProducts(data?.products)
      
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <Layout title={"Jaɓɓorgo - Bismilla mon e Ful_Kel"}>


     <div className="row  ">
      <div className="col-md-3 bg-primary">
        <h4 className="text-center">Suɓto fawaade e Lowre</h4>
        <div className="d-flex flex-column">
        {categories?.map( c => {
          return(
            <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
              {c.name}
            </Checkbox>
          )
        })}
        </div>

      </div>

      <div className="col-md-9 bg-dark " id="kel">    
        <h1 className="text-center text-white"> Kelme Pulaaɗe </h1>
        <div className="d-flex flex-wrap">
        {products?.map(p => {
                        return(
                           
                            <div className="card m-2 p-1" style= {{ width: '18rem'}} >
                                <img src= {logo} className="card-img-top" alt= {p.slug} style={{height: 150}} />
                                <div className="card-body " id="card-body">
                                    <h3 className="card-title text-green"> {p.peul} </h3>
                                    <h3 className="card-text">  { p.french.substring(0,30)} </h3>
                                    <h3 className="card-text">  {p.english} </h3>
                                    <button  class="btn btn-dark m-1" onClick={() => navigate(`/product/${p.slug}`)}>Yiy fof</button>
                                    
                                </div>
                            </div>                           

                        )
                    }
                    )}
        </div>
        <div className="text-white bg-success p-3 m-2">
              {products && products.length < total && (
        <button className="btn btn-warning" onClick={(e) => {
          e.preventDefault();
          setPage(page + 1);
            }}>
              {loading ? "Ko e njiylaw wonaa ..." : "Yiy goɗɗe"}
            </button>
          )}
        </div>
      </div>

     </div>
     
    </Layout>
  );
};

export default HomePage;