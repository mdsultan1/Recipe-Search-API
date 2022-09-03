import React from 'react'
import "./index.css"

export const Recipe = ({dish}) => {
  return (
    <div className="recipe-container">
        <h2 style={{textAlign: "center"}}>{dish.recipe.label}</h2>
        <div className='recipe-info'>
        <img src = {dish.recipe.images.REGULAR.url} alt = "img" />
        <ul style={{marginLeft: "30px"}}> <h3 style = {{marginBottom:"10px"}}>Recipe</h3>

         { dish.recipe.ingredientLines?
             dish.recipe.ingredientLines.map((ingredient,index) =>(
                 <li key = {index}>{ingredient}</li>
             )):null
         }
           
        </ul>
        <div className='extras'>

        <h3>Calories: {Math.floor(dish.recipe.calories)}</h3>
        <h3>Cuisine Type: {dish.recipe.cuisineType[0]}</h3>

        </div>
        </div>
        
    </div>
  )
}
