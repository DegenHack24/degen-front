import { shortenAddress } from "../utils/helpers/shortenAddress";

export default function Navbar({
  metaMaskAccount,
  buttonText,
  connectWalletHandler,
  disconnectHandler,
}) {
  return (
    <div className="flex flex-row bg-red-100 py-4 justify-between max-w-[900px] mx-auto">
      <div className="flex justify-center items-center px-4 py-2 bg-primary border text-white">
        BULLetproof
      </div>
      <div className="flex justify-center items-center gap-4">
        {metaMaskAccount && (
          <div className="text-black">
            <p>
              Hello! <span>{shortenAddress(metaMaskAccount)}</span>
            </p>
          </div>
        )}

        <button
          className=" bg-primary"
          disabled={buttonText === "Connected"}
          onClick={metaMaskAccount ? disconnectHandler : connectWalletHandler}
        >
          <div className="w-20">{buttonText}</div>
        </button>
      </div>
    </div>
  );
}
