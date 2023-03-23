import React, { useContext } from 'react';
import Card from '../../COMPONENTS/CARD/Card';
import { PassData } from '../../countryContext';
import styles from "./Home.module.css";

const Home = ({sendData}) => {

  const {data : countries} = useContext(PassData);

  console.log(countries.filter( e => e.region == "Americas" ));

  return (
    <>
   {countries.filter( e => e.region === "Americas" ).map(e => <Card flag ={e.flags.png} capital ={e.capital}/>)}
    </>
  )
    
}

export default Home;