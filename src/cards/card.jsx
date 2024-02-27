import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./card.module.css";

import Api from "../api"

export default function Card() {
  let [countries, setCountries] = useState([]);
  useEffect(() => {
    try {
      async function getdata() {
        let res = await fetch(Api).then((data)=> data.json()).catch((err)=>console.log(err))
        // setCountries(data.data);
        // console.log(data.data);
        setCountries(res)
       // return data;
      }
      getdata();
    } catch (error) {
      // console.error("Error getting data" , error);
      console.log(error)
    }
  }, []);
  return (
    <div className={styles.parent}>
      {countries.map((country) => (
        <div className={styles.card} key={country.cca3}>
          <img
            className={styles.flag}
            src={country.flags.png}
            alt={country.name.common}
          />
          <h5 className={styles.name}>{country.name.common}</h5>
        </div>
      ))}
    </div>
  );
}
