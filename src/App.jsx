import "../src/styles/App.css";
import Layout from "./components/Layout";
import { MetamaskProvider } from "./utils/contexts/metamaskContext";

function App() {
  return (
    <MetamaskProvider>
      <main className="w-full items-center flex-1 min-h-screen">
        <Layout />
      </main>
    </MetamaskProvider>
  );
}

export default App;
