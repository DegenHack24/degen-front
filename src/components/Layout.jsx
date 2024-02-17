import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useMetaMaskContext } from "../utils/contexts/metamaskContext";
import AssetsTable from "./AssetsTable";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";

export default function Layout() {
  const navigate = useNavigate();

  const { buttonText, connectWalletHandler, metaMaskAccount } =
    useMetaMaskContext();

  useEffect(() => {
    if (metaMaskAccount) navigate("/assets-table");
    else navigate("/");
  }, [metaMaskAccount]);

  return (
    <div className="w-full justify-center mx-auto h-screen bg-[#F3EBE0]">
      <Navbar
        buttonText={buttonText}
        connectWalletHandler={connectWalletHandler}
      />
      <main className="w-full items-center flex-1">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/assets-table" element={<AssetsTable />} />
        </Routes>
      </main>
    </div>
  );
}
