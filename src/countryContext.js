import React, { createContext, useEffect, useState } from "react";

export const PassData = createContext();



const ContextProvider = (props) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const Countrydata = await response.json();
    console.log(Countrydata);
    setData(Countrydata);
  };
  
  useEffect(() => {
    fetchData();
  }, []);


  return <PassData.Provider value={{data}}>
    {props.children}
  </PassData.Provider>;
};

export default ContextProvider;
