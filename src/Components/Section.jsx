import React from 'react'
import "./Section.css"
import Card from './Card'

const Section = ({data, setData,search,setSearch}) => {
  return (
    <div className='section'>
        <div className="container">
            {data.length > 0  ? (
               data.map((item,id)=>(
                <div className="card-group" key={item.id}>
                  <Card>
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                    
                  </Card>
                </div>
            ))
            ) : <p>No result found</p>}
           

        </div>
    </div>
  )
}

export default Section