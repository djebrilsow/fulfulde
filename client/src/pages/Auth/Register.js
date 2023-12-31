import React, {useState} from 'react'
import Layout from '../../components/Layout/Layout'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import '../styles/AuthStyles.css'


export default function Register() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("")
    const [answer, setAnswer] = useState("")
    const navigate = useNavigate()

    const handlSubmit = async (e) => {
        e.preventDefault();
        

        try {
            const res = await axios.post(`/api/v1/auth/register`, {
                name, email, password, phone, adress, answer
            });
        

            if(res && res.data.succes) {
                toast.success(res.data.message)
                navigate('/login');
            }
            else{
                toast.error(res.data.message)
            }
            
        } catch (error) {
            toast.error("Something went wrong")
        }
       
        
    }


  return (
    <Layout title={'Winndit'}>
        <div className='form-container'>
             
             <form onSubmit={handlSubmit}>
             <h4 className="title">BINNDITGOL</h4>
                <div className="mb-3">
                    <input 
                        type="text" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder='Naatnu innde ma'
                        required
                     />  
                </div>

                <div className="mb-3">
                    <input 
                        type="password" 
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder='Naatnu finnde ma'
                        required
                     />  
                </div>

                <div className="mb-3">
                    <input 
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="form-control" 
                        id="exampleInputPassword1" 
                        placeholder='Naatnu Emeel ma'
                        required
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="text" 
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder='Naatnu tonngoode ma'
                        required
                     />  
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        value={adress}
                        onChange={e => setAdress(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder='Naatnu Ñiiɓirde    ma'
                        required
                     />  
                </div>
                <div className="mb-3">
                    <input 
                        type="text" 
                        value={answer}
                        onChange={e => setAnswer(e.target.value)}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        placeholder='What is your favorite sports ?'
                        required
                     />  
                </div>
                
                <button type="submit" className="btn btn-primary">
                   Winndit
                </button>
                
            </form>
        </div>
    </Layout>
  )
}
