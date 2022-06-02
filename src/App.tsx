import React, { useEffect, useState } from "react";
import "./App.css";
import CountryPage from "./country-card/CountryPage";
import { Country } from "./country";

const axios = require("axios").default;

function App() {
  const [data, setData] = useState<Array<Country>>([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const info = await response.data;
      console.log(info);
      setData(info);
    }
    getData();
  }, []);

  setTimeout(() => {}, 1000);

  return (
    <div className="App">
      {data.map((state, index) => (
        <CountryPage data={state} key={index} />
      ))}
    </div>
  );
}

export default App;
