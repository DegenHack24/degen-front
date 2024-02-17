import { BrowserRouter } from "react-router-dom";
import "../src/styles/App.css";
import "../src/styles/globals.css";
import Layout from "./components/Layout";
import { MetamaskProvider } from "./utils/contexts/metamaskContext";

function App() {
  return (
    <div className="h-screen">
      <MetamaskProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </MetamaskProvider>
    </div>
  );
}

export default App;
