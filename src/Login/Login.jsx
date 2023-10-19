import axios from 'axios';
import React, { useState } from 'react'

function Login() {
    const [mycategory,setmyCategory] = useState({
        category:"",
        image:"",
        subcategory:""
    });
    
    const onchangeHandler=(e)=>{
        setmyCategory(prev=>({...prev,[e.target.name]:e.target.value}));
    };
    console.log(mycategory);
    const addHandler=async()=>{
      try{
        await axios.post("http://localhost:5001/categories",mycategory);
        alert(" Data added to database");
        
      } catch(err) {
        alert(err);
      }

    };
  return (
    <div>
      <input type='text' onChange={onchangeHandler} placeholder='category' name="category"></input><br /><br />
      <input type='text' onChange={onchangeHandler} placeholder='image' name = "image" ></input><br /><br />
      <input type='text' onChange={onchangeHandler} placeholder='subcategory' name = "subcategory" ></input>
      <button className="update" onClick={addHandler}>UPDATE</button>
    </div>
  )
}

export default Login
