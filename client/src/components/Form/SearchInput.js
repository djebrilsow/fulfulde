import React, { useState } from 'react'
import { useSearch } from '../../context/search'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import logo from '../../assets/logo1.jpg'






const SearchInput = () => {
    const [values, setValues] = useSearch()
    const [result, setResult] = useState([])
    const [open, setOpen] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.get(`/api/v1/product/search/${values.keyword}`)
            setValues({...values, results: data})
            setResult(data)
            setOpen(true)
           
            // navigate("/search")

            
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input 
            className="form-control me-2" 
            type="search" 
            placeholder="Yiylo helmere" 
            aria-label="Search"
            id="search"
            value={values.keyword}
            onChange={e => setValues({...values, keyword: e.target.value})}
            />
            <button className="btn btn-outline-success" type="submit">Yiylo</button>
        </form>
        <div className="d-flex flex-wrap">
        {open && 
             <>  
               { result.map(p => {
                    return(
                       
                        <div className="card m-2 p-1 d-flex "  style= {{ width: '18rem'}} >
                            <img src= {logo} className="card-img-top" alt= {p.slug} style={{height: 150}} />
                            <div className="card-body " id="card-body">
                                <h3 className="card-title f"> {p.peul} </h3>
                                <h3 className="card-text">  { p.french.substring(0,30)} </h3>
                                <h3 className="card-text">  {p.english} </h3>
                                <button  class="btn btn-dark m-1" onClick={() => navigate(`/product/${p.slug}`)}>Yiy fof</button>
                                
                            </div>
                            
                        </div>                           

                    ) 
                } 
                ) } 
                <button className='btn btn-danger my-2' id='but' onClick={() => {setOpen(false) }}>Yaltu</button>
                
                </> 
                } 
                </div>
       

        

        
    </div>
  )
}

export default SearchInput