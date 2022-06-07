import { BrowserRouter } from "react-router-dom";
import Views from "./views";
import ReactQueryProvider from "./components/ReactQueryProvider";

function App() {
  return (
    <ReactQueryProvider
      children={
        <BrowserRouter>
          <Views />
        </BrowserRouter>
      }
    />
  );
}

export default App;
