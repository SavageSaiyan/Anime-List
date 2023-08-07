import React from 'react'
import {useState} from 'react'

function Form({movieSearch}) {

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
     
        <StyledForm onSubmit={handleSubmit}>
            <input type='text' value={formData.searchTerm} onChange={handleChange}/>
            <input type='submit' value="submit" />
        </StyledForm>
       
  )
}

export default Form