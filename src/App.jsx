import { BrowserRouter } from "react-router-dom";
import "../src/styles/App.css";
import Layout from "./components/Layout";
import { MetamaskProvider } from "./utils/contexts/metamaskContext";

function App() {
  return (
    <MetamaskProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </MetamaskProvider>
  );
}

export default App;
