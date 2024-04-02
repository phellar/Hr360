import React from 'react'
import "./Search.css"
import SearchIcon from "../assets/search.png"
import Command from "../assets/ph_command-bold.png"
import K from "../assets/healthicons_k.png"
import Cloud from "../assets/cloud-upload.png"
import Fil from "../assets/text-align-center.png"


const Search = () => {
  return (
    <div className='search'>
        <div className="form-field" id='search-comp'>
                <div className="input-icon"> <img src={SearchIcon}/> </div>
                     <input type="search" 
                        placeholder='Search by name,role,department..'  className='search-form' />
                    <div className="input-icon"> <img src={Command}/> </div>
                    <div className="input-icon"> <img src={K}/> </div> 
        </div>

               
                        <div className="form-field" id='filter-item'>
                            <input type="search" placeholder='Filter' className='filter'  />
                            <img src={Fil}/> 
                        </div>
                    <div className="form-field">
                        <select name="All department" className='select-list'>
                            <option value="all" className='option'>All department</option>
                            <option value="eng" className='option'>Engineering</option>
                            <option value="eng" className='option'>Marketing Team</option>
                            <option value="dsgn" className='option'>Design Team</option>
                        </select>
                    </div>
               
                    <div className="form-field">
                            <input type="date"  className='date-calender' value="date"/>
                    </div>
                        <div className="form-field">
                            <button className='export-btn'>
                                Export CSV 
                                <img src={Cloud}/>
                            </button>

                        </div>
               
    </div>
  )
}

export default Search