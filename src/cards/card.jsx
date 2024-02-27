import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./card.module.css";

import Api from "../api"

export default function Card() {
  let [countries, setCountries] = useState([]);
  useEffect(() => {
    try {
      async function getdata() {
        let res = await fetch(Api)
        let data = await res.json()
        // setCountries(data.data);
        // console.log(data.data);
        setCountries(data)
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
