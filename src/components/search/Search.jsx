import React from 'react'
import './Search.css'
import { useContext, } from 'react'
import { userContext } from '../Constants/Context'
import scooter from '../../images/Scooter.webp'
import Shop from '../Shoping/Shop'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Search() {
 const   navigate = useNavigate();
    const {alldata,searchTerm} =useContext(userContext);
    // const searchedData = alldata && alldata.filter((dataItem)=>dataItem.comboitem.toLowerCase().includes(searchTerm.toLowerCase()));
    // console.log(searchedData);
    const searchdata = alldata && alldata.filter((srchdata)=>srchdata.comboitem.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()))
    console.log(searchTerm);
  return (
   
    
    <div className='searchWrapper'>
      <div className="searchContainer">
        
            {searchTerm !==""  ? searchdata.map((allDataItem)=>     (<div className='searchwrap'>
               <div className="searchImgContainer">
            <img src={`${process.env.PUBLIC_URL}/dataImages/${allDataItem.image}`} alt="" className="searchimg" />
        </div>
        <NavLink className="myNav" to ={`/details/${allDataItem.id}`}>
        <div className="searchDetailContainer">
            <p className="searchHead">{allDataItem.comboitem}</p>
            <h3 className="searchPrice">₹{allDataItem.selling_price}</h3>
        </div> 
        </NavLink>
        <div className="scooterContainer">
            <img src={scooter} alt="" className="scooterimg" />
        </div>
      
            </div>)):navigate('/')}
            
      </div>
    </div>
    
  )
}

export default Search
