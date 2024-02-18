import { Route, Routes } from "react-router-dom";
import { useMetaMaskContext } from "../utils/contexts/metamaskContext";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

export default function Layout() {
  const {
    buttonText,
    connectWalletHandler,
    metaMaskAccount,
    disconnectHandler,
  } = useMetaMaskContext();

  return (
    <div className="w-full justify-center mx-auto h-screen bg-background">
      <Navbar
        metaMaskAccount={metaMaskAccount}
        buttonText={buttonText}
        connectWalletHandler={connectWalletHandler}
        disconnectHandler={disconnectHandler}
      />
      <main className="w-full items-center flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}
