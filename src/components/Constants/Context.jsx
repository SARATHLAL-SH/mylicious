import React, { useEffect, useState, createContext } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export const userContext = createContext();

function Context(props) {
  const [combodata, setComboData] = useState([]);
  const [datas, setDatas] = useState([]);
  const [objCounts, setObjCounts] = useState([]);
  const [count, setCount] = useState([]);
  const [cartarrayData, setCartArrData] = useState([]);
  const cartArr = [cartarrayData];
  const [itemCount, setItemCount] = useState();

  const [sellerId, setSellerId] = useState();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [data1, setdata1] = useState([]);
  const [data2, setdata2] = useState([]);
  const [data3, setdata3] = useState([]);
  const [data4, setdata4] = useState([]);
  const alldata = [...data1, ...data2, ...data3, ...data4];

  const toggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
    setIsCartOpen(false);
  };
  const deleteHandler = (mydata) => {
    const deleltedobj = cartarrayData.filter(
      (remove) => mydata.id !== remove.id
    );
    setCartArrData(deleltedobj);
    const deleltedArray = objCounts.filter((remove) => mydata.id !== remove.id);
    setObjCounts(deleltedArray);
  };

  const addItemHandler = (filterData) => {
    const isalreadyInCart = cartarrayData.some(
      (item) => item.id === filterData.id
    );

    if (!isalreadyInCart) {
      setCartArrData([...cartarrayData, filterData]);

      const newItem = {
        id: filterData.id,
        objCount: 1,
        selling_price: filterData.selling_price,
        total_Price: filterData.selling_price,
      };

      setObjCounts((prevItem) => [...prevItem, newItem]);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((response) => {
        setDatas(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  }, [setObjCounts]);
  useEffect(() => {
    if (sellerId === 2) {
      axios
        .get("http://localhost:5000/combos")
        .then((response) => {
          setComboData(response.data);
        })
        .catch((e) => {
          alert(e);
        });
    } else if (sellerId === 3) {
      axios
        .get("http://localhost:5000/fish")
        .then((response) => {
          setComboData(response.data);
        })
        .catch((e) => {
          alert(e);
        });
    } else if (sellerId === 4) {
      axios
        .get("http://localhost:5000/mutton")
        .then((response) => {
          setComboData(response.data);
        })
        .catch((e) => {
          alert(e);
        });
    } else if (sellerId === 5) {
      axios
        .get("http://localhost:5000/ready_to_cook")
        .then((response) => {
          setComboData(response.data);
        })
        .catch((e) => {
          alert(e);
        });
    }
  }, [sellerId]);

  useEffect(() => {
    const allDataHandler = async () => {
      try {
        const response1 = await axios.get("http://localhost:5000/combos");
        setdata1(response1.data);
        const response2 = await axios.get(
          "http://localhost:5000/ready_to_cook"
        );
        setdata2(response2.data);
        const response3 = await axios.get("http://localhost:5000/fish");
        setdata3(response3.data);
        const response4 = await axios.get("http://localhost:5000/mutton");
        setdata4(response4.data);
      } catch (err) {
        alert("all data fetcing error", err);
      }
    };
    allDataHandler();
  }, []);

  const onSearchHandler = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
    navigate("/search");
    setIsCartOpen(false);
    setIsCategoryOpen(false);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    setIsCategoryOpen(false);
  };
  //   console.log("combodata", combodata);
  return (
    <div>
      <userContext.Provider
        value={{
          datas,
          combodata,
          count,
          setCount,
          addItemHandler,
          cartarrayData,
          objCounts,
          setObjCounts,
          itemCount,
          setItemCount,
          deleteHandler,
          cartArr,
          sellerId,
          setSellerId,
          searchTerm,
          setSearchTerm,
          onSearchHandler,
          alldata,
          isCartOpen,
          setIsCartOpen,
          toggleCart,
          toggleCategory,
          isCategoryOpen,
          setIsCategoryOpen,
        }}
      >
        {props.children}
      </userContext.Provider>
    </div>
  );
}

export default Context;
