import "./styles.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function AppWithSearch() {
  const [flags, setFlags] = useState([]);
  const [change, setChange] = useState(null);
  console.log(change);
  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get("https://restcountries.com/v3.1/all");
        // console.log(res.data);
        setFlags(res.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      try {
        let res = await axios.get(
          `https://restcountries.com/v3.1/name/${change}`
        );
        setFlags([]);
        setFlags(res.data);
      } catch (error) {
        console.log(error);
      }
      // finally {
      //   setChange(null);
      // }
    })();
  }, [change]);
  return (
    <div className="App">
      <div className="searchParent">
        <input
          onChange={(e) => {
            if (e.target.value) {
              setChange(e.target.value);
            } else {
              setChange(null);
            }
          }}
          className="search"
          type="text"
          placeholder="Search for Countries..."
        />
      </div>
      <div className="flagsParent">
        {flags.length > 0 &&
          flags.map((flag) => (
            <div className="countryCard" key={flag.cca3}>
              <img className="flagImg" src={flag.flags.png} alt="" />
              <p>{flag.name.common}</p>
            </div>
          ))}
        {flags.length === 0 && ""}
      </div>
    </div>
  );
}
