import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./card.module.css";

let Api = "https://restcountries.com/v3.1/all";

export default function Card() {
  let [countries, setCountries] = useState([]);
  useEffect(() => {
    try {
      async function getdata() {
        let data = await axios.get(Api);
        setCountries(data.data);
        // console.log(data.data);
        // return data;
      }
      getdata();
    } catch (error) {
      console.error("Error getting data" ,error);
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
