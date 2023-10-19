import React, { useEffect, useState } from "react";
import "../../components/Navbar/Categories.css";
import axious from "axios";

function Categories() {
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  useEffect(() => {
    axious.get("http://localhost:5000/categories").then((response) => {
      setCategory(response.data);
    });
  }, []);
  const subcatHandle = (e) => {
    console.log([e.subcategory]);
    setSubCategory([e.subcategory]);
  };
  return (
    <div className="categoryMain">
      {category.map((myCategory) => (
        <>
          <div className="cateogoryWrapper">
            <div
              className="categoryContainer"
              onMouseEnter={() => subcatHandle(myCategory)}
            >
              <div className="categoryImgContainer">
                <img
                  src={`${process.env.PUBLIC_URL}/dataImages/${myCategory.image}`}
                  alt=""
                  className="CategoryImg"
                  key={myCategory.id}
                />
              </div>
              <div className="categoryheadContainer">
                {" "}
                <h4 className="categoryName">{myCategory.category}</h4>
              </div>
              
            </div>
            {subCategory &&
        subCategory.map((filtersubcat) => (
          <div className="subcategoryContainer">
            {console.log("filtersubcat", filtersubcat)}
            {filtersubcat &&
              filtersubcat.map((item) => {
                return <div className="subcatContainer"><h4 className="subcategory">{item} </h4></div>;
              })}
          </div>
        ))}
          </div>
        </>
      ))}
      
      
    </div>
  );
}

export default Categories;
