import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import {GiShoppingBag} from 'react-icons/gi'
import { useAuth } from '../../context/auth'
import toast from 'react-hot-toast';
import SearchInput from '../Form/SearchInput';
import useCategory from '../../hooks/useCategory';
import logo from '../../assets/logo1.jpg'
import SearchComponent from '../Form/SearchComponent';



export default function Header() {
  const [auth, setAuth] = useAuth()
  const categories = useCategory()

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token:""
    })
    localStorage.removeItem('auth')
    toast.success('Logout Successfully!')
  }


  return (
    <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <Link to='/' className="navbar-brand" id='ardorde' > 
    
     <img src = {logo} style={{width: 45, height: 45,}} />  Ful_Kel
    </Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        

       <li className="nav-item">
          <NavLink to='/' className="nav-link" >
            Jaɓɓorgo
          </NavLink>
        </li>


           {
            !auth.user ? (
              <>

                <li className="nav-item">
                <NavLink to='/login' className="nav-link" >
                Seŋo
                </NavLink>
              </li>
              </>
            ) : (
              <>  
             <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               {auth?.user?.name}
            </NavLink>
            <ul className="dropdown-menu">
              
              <li>
                <NavLink to= {`/dashboard/${auth?.user.role === 1 ? 'admin' : 'user'}`} className="dropdown-item" >Liggordu</NavLink>
              </li>
              <li className="dropdown-item">
              <NavLink onClick={handleLogout} to='/login' className="nav-link" style= {{backgroundColor: "black", color: "white"}}>
                Seŋto
              </NavLink>
              </li>
             
              
            </ul>
          </li>
          <li className="nav-item">
                  <NavLink to='admin/!ó$$!!aɗer/register' className="nav-link" >
                  Winndit
                  </NavLink>
                </li>
             
              </>
            )
           }

      </ul>
      
      
    </div>
  </div>
</nav>
<SearchInput />

    </>
  )
}
