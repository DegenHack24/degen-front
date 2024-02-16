import { useMetaMaskContext } from "../utils/contexts/metamaskContext";
import AssetsTable from "./AssetsTable";
import Dashboard from "./Dashboard";

export default function Layout() {
  const { buttonText, connectWalletHandler, metaMaskAccount, error } =
    useMetaMaskContext();
  console.log("metaMaskAccount", metaMaskAccount);
  console.log("error", error);
  return (
    <div className="w-full justify-center mx-auto">
      <div className="flex flex-row gap-10">
        <div>BULLetproof</div>
        <button
          disabled={buttonText === "Connected"}
          onClick={connectWalletHandler}
        >
          <div className="w-20">{buttonText}</div>
        </button>
      </div>
      <Dashboard />
      <AssetsTable />
    </div>
  );
}
