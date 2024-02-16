import { useMetaMaskContext } from "../utils/contexts/metamaskContext";
import AssetsTable from "./AssetsTable";
import Dashboard from "./Dashboard";

export default function Layout() {
  const { buttonText, connectWalletHandler, metaMaskAccount } =
    useMetaMaskContext();

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
      <div className="flex justify-center">
        {metaMaskAccount ? <AssetsTable /> : <Dashboard />}
      </div>
    </div>
  );
}
