import React from 'react'
import "./Search.css"

const Search = () => {
  return (
    <div className='search'>
        <div className="form-field">
            <input type="search" placeholder='Search by name,role,department..'className='search-form' />
        </div>
                <div className="form-field">
                    <input type="search" placeholder='Filter'  />
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
                            <button className='export-btn'>Export as CSV</button>

                        </div>
    </div>
  )
}

export default Search