import { BrowserRouter } from "react-router-dom";
import Views from "./views";
import ReactQueryProvider from "./components/ReactQueryProvider";
import DarkModeContextProvider from "./components/hoc/DarkModeContext";

function App() {
  return (
    <ReactQueryProvider
      children={
        <BrowserRouter>
          <DarkModeContextProvider>
            <Views />
          </DarkModeContextProvider>
        </BrowserRouter>
      }
    />
  );
}

export default App;
