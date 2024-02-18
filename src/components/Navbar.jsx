import { useNavigate, useLocation } from "react-router-dom";
import { shortenAddress } from "../utils/helpers/shortenAddress";

export default function Navbar({
  metaMaskAccount,
  buttonText,
  connectWalletHandler,
  disconnectHandler,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex flex-row bg-red-100 py-4 justify-between max-w-[900px] mx-auto">
      <div className="flex justify-center items-center px-4 py-2 bg-primary border text-white">
        BULLetproof
      </div>
      <div className="flex justify-center items-center gap-4">
        {metaMaskAccount && (
          <div className="text-black">
            <p>
              Hello!{" "}
              <span className="font-semibold">
                {shortenAddress(metaMaskAccount)}
              </span>
            </p>
          </div>
        )}

        <button
          className=" bg-primary"
          disabled={buttonText === "Connected"}
          onClick={() =>
            navigate(location.pathname === "/" ? "/create-order" : "/")
          }
        >
          <div className="w-34">
            {location.pathname === "/" ? "Create buy order" : "Homepage"}
          </div>
        </button>
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
