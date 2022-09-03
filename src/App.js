


import {Recipe} from "./components/Recipe"
import {Header} from "./components/Header"
import axios from "axios"
import { useEffect, useState } from "react"
function App() {

  
  const [data, setData] = useState("")
  const [recipe, setRecipe] = useState("")
  const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe}&app_id=cb1b1cd5&app_key=471200739c4bcb70402a18bb6dbd67d1`


  const callApi = async () =>{

    try {
      const {data:{hits}} = await axios.get(apiUrl)
       setData( hits)
    }
    catch(error){
      
    }
  }
  

  const submitHandler = (e) =>{
    e.preventDefault()
    callApi()
  }


  return (
    <div className = "app">
      <Header></Header>
      <div  className = "search-container">

      <form >
        <input type = "text" onChange = {(e) =>setRecipe(e.target.value)} placeholder="Search Your Favourite Food" />
        <button onClick = { submitHandler} >Search</button>

      </form>

      </div>
      <p style = {{textAlign:"center", marginTop:"10px", fontWeight:"bold"}}>*ONLY 5 SEARCHES ARE ALLOWED PER MINUTE</p>
      <div className = "recipes-container">

        {data?
          data.map((item,index)=>(
            <Recipe dish = {item} key = {index}></Recipe>
          )) : null

        }
      </div>
    <div className="footer">
      <span style={{}}>&#169; Mohammed Sultan</span>

    </div>
      
      



    
    </div>
  );
}

export default App;
