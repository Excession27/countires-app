import { Routes, Route } from "react-router-dom";
import CountryPage from "../containers/CountryPage";
import Home from "../containers/Home";

const Views = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/code/:countryCode" element={<CountryPage />} />
      <Route
        path="*"
        element={
          <div>
            Error 404: Sorry the page you are looking for doesn't exist.
          </div>
        }
      />
    </Routes>
  );
};

export default Views;
