import React, { useEffect, useState } from "react";
import "./App.css";
import CountryPage from "./country-page/CountryPage";
import { Country } from "./country";

const axios = require("axios").default;

function App() {
  const [data, setData] = useState<Array<Country>>([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        "https://restcountries.com/v3.1/name/germany"
      );
      const info = await response.data;

      setData(info);
    }
    getData();
  }, []);

  return (
    <div className="App">
      {data.map((state, index) => {
        return <CountryPage data={state} key={index} />;
      })}
    </div>
  );
}

export default App;
