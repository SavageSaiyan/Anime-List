import React from 'react'
import {useState} from 'react'

function Form({mangaSearch}) {

    const [formData, setFormData] = useState({
        searchTerm: ''
    });

    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData({
            ...formData, 
            searchTerm : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        movieSearch(formData.searchTerm)
    }

  return (
     
        <form onSubmit={handleSubmit}>
            <input type='text' value={formData.searchTerm} onChange={handleChange}/>
            <input type='submit' value="submit" />
        </form>
       
  )
}

export default Form