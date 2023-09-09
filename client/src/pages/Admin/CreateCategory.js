import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import toast from 'react-hot-toast';
import { Modal } from 'antd'
import axios from 'axios';
import CategoryForm from '../../components/Form/CategoryForm';


const CreateCategory =  () => {
  const [category, setCategory] = useState([])
  const [name, setName] = useState('')
  const [visible, setVisible]= useState(false)
  const [selected, setSelected] = useState(null)
  const [updatedName, setUpdatedName] = useState("")

  // hande form
  const handleSubmit =async e => {
    e.preventDefault();

    try {
      const {data} = await axios.post('/api/v1/category/create-category', {name})
      console.log(data)
      if(data?.succes) {
        toast.success(data.message)
        getAllCategory()
      }
      else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error)
      // toast.error('Waɗii caɗeele seeɗa')
    }
  }

  // get all categories
  const getAllCategory = async () => {
    try {
      const {data} = await axios.get('/api/v1/category/get-category')
      if(data?.succes) {
        setCategory(data?.category)
      }
      console.log(category)
      
    } catch (error) {
      console.log(error)
      // toast.error('Waɗii caɗeele seeɗa')
    }
  }

  useEffect(() => {
    getAllCategory();
  }
  , [])

  // update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
     const {data} = await axios.put(`/api/v1/category/update-category/${selected._id}`, {
      name: updatedName
    })
     if(data.succes) {
      toast.success(data.message)
      setSelected(null)
      setUpdatedName('')
      setVisible(false)
      getAllCategory()
     }
     else{
      toast.error(data.message)
     }
    } catch (error) {
      // toast.error('Waɗii caɗeele')
    }
  }

  // delete category
  const handleDelete = async (pId) => {
    try {
       const conf = window.confirm("Aɗa yiɗi momtude ?")
       if(conf){
        const {data} = await axios.delete(`/api/v1/category/delete-category/${pId}`)
        if(data.succes) {
         toast.success(` Lowre ndee momtaama`)
         getAllCategory()
        }
        else{
         toast.error(data.message)
        }
       }

    
    
    } catch (error) {
      toast.error('Waɗii caɗeele seeɗa')
    }
  }

  return (
    <Layout title={'Gollorrdu- Taf Lowre'}>
        <div className='container-fluid m-3 p-3'>
    <div className='row'>
        <div className='col-md-3'>
            <AdminMenu />
        </div>
        <div className='col-md-9'>
        <h1> Lowe Ganndine </h1>
        <div className='p-3 w-50'>
             <CategoryForm handleSubmit={handleSubmit} value={name} setValue= {setName} />
        </div>
      <div className='w-75'>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Innde</th>
            <th scope="col">Baɗe</th>
          </tr>
        </thead>
        <tbody>
         
              {category?.map(c => {
                return(

                  <>
                  <tr> 
                    <td> {c.name} </td>
                    <td> 
                      <button 
                      className='btn btn-primary ms-2' 
                      onClick= { () => {
                      setVisible(true) ; 
                      setUpdatedName(c.name) ; 
                      setSelected(c)
                    }} 
                      > 
                      Waylude 
                      </button> 
                      <button 
                      className='btn btn-danger ms-2'
                      onClick={() => {
                        handleDelete(c._id)}}
                      >
                        Momtude
                      </button> 
                    </td>
                  </tr> 
                  </>
                )
              })}
             
        </tbody>
      </table>
    </div>
    <Modal 
    onCancel={() => setVisible(false)}
    footer={null}
    visible={visible}
    > 
    <CategoryForm value= {updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />
    
    </Modal>

        </div>
        
    </div>
    </div>
</Layout>
  )
}

export default CreateCategory