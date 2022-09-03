import React from 'react'
import "./index.css"

export const Header = () => {
  return (
    <div className = "header">

        <h1>RECIPE SEARCH API</h1>
        <p style = {{marginTop: "20px"}}>
            Search for your favourite food Recipe.
            Our Recipe API has data of thousands of dishes and cuisines.
        </p>
    </div>
  )
}
