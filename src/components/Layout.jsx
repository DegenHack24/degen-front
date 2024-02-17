import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useMetaMaskContext } from "../utils/contexts/metamaskContext";
import TableWrapper from "./AssetsTable/TableWrapper";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

export default function Layout() {
  const navigate = useNavigate();

  const {
    buttonText,
    connectWalletHandler,
    metaMaskAccount,
    disconnectHandler,
  } = useMetaMaskContext();

  useEffect(() => {
    if (metaMaskAccount) navigate("/assets-table");
    else navigate("/");
  }, [metaMaskAccount]);

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
          <Route path="/assets-table" element={<TableWrapper />} />
        </Routes>
      </main>
    </div>
  );
}
