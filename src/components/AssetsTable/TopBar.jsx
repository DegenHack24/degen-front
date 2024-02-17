import { ALL_ASSETS } from "../../utils/constants/globals";
import { MY_ASSETS } from "../../utils/constants/globals";

export default function TopBar({ handleView }) {
  return (
    <div className="mt-4 flex gap-8">
      <button
        type="button"
        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-slate-900"
        onClick={() => handleView(MY_ASSETS)}
      >
        My shares
      </button>
      <button
        type="button"
        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-slate-900"
        onClick={() => handleView(ALL_ASSETS)}
      >
        All orders
      </button>
    </div>
  );
}
