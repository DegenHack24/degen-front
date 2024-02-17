export default function Navbar({ buttonText, connectWalletHandler }) {
  return (
    <div className="flex flex-row bg-red-100 py-4 px-20 justify-between">
      <div className="flex justify-center items-center px-4 py-2 bg-black border text-white">
        BULLetproof
      </div>
      <button
        disabled={buttonText === "Connected"}
        onClick={connectWalletHandler}
      >
        <div className="w-20">{buttonText}</div>
      </button>
    </div>
  );
}
