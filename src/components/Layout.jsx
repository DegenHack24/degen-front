import { useMetaMaskContext } from "../utils/contexts/metamaskContext";

export default function Layout() {
  const { buttonText, connectWalletHandler, metaMaskAccount, error } =
    useMetaMaskContext();
  console.log("metaMaskAccount", metaMaskAccount);
  console.log("error", error);
  return (
    <div>
      <button
        disabled={buttonText === "Connected"}
        onClick={connectWalletHandler}
      >
        <div className="w-20">{buttonText}</div>
      </button>
    </div>
  );
}
