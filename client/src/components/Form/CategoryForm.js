import React from 'react'

const CategoryForm = ({handleSubmit, value, setValue}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
        <input 
            type="text" 
            className="form-control" 
            placeholder='Winndu Lowre hesere' 
            value={value} 
            onChange={e => setValue(e.target.value)}
        />
    </div>

    <button type="submit" className="btn btn-primary">Naatnu</button>
    </form>
   
    </>
  )
}

export default CategoryForm