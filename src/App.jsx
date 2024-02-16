import "./App.css";
import Layout from "./components/Layout";
import { MetamaskProvider } from "./utils/contexts/metamaskContext";

function App() {
  return (
    <MetamaskProvider>
      <main className="w-full border">
        <Layout />
      </main>
    </MetamaskProvider>
  );
}

export default App;
