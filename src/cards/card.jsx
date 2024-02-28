import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./card.module.css";

import Api from "../api"

export default function Card() {
  let [countries, setCountries] = useState([]);
  useEffect(() => {
    async function getdata() {
    try {
        let data = await axios.get(Api);
        setCountries(data.data);
        console.log(data.data);
       // return data;
      }
     catch (error) {
      console.log("Error getting data" ,error)
    }
  }
    getdata();
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