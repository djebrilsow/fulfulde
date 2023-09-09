import React from 'react';
import { NavLink } from 'react-router-dom';


const AdminMenu = () => {
    return (
        <>
        <div className='text-center'>
        <div className="list-group">
            <NavLink to="/dashboard/admin/">
            <h4>Liggorde Gardiiɗo</h4>
            </NavLink>
          
            <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Tafde Lowre</NavLink>
            <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Tafde Helmere</NavLink>
            <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action"> Kelme</NavLink>
            <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action">Eɓɓaale Goɗɗe</NavLink>
        </div>
        </div>
       


        </>
    )
}

export default  AdminMenu