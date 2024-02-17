import { useState } from "react";
import { MY_ASSETS } from "../../utils/constants/globals";
import TopBar from "./TopBar";
import TableBody from "./TableBody";
import { myShares, allOrders } from "../../utils/constants/mocked-assets";

export default function AssetsTable() {
  const [view, setView] = useState(MY_ASSETS);
  console.log("view:", view);

  const handleView = (view) => {
    setView(view);
  };

  return (
    <div className="w-[900px] px-4 sm:px-6 lg:px-8 w-3/4 border-4 border-black mx-auto mt-4">
      <TopBar handleView={handleView} />
      <TableBody data={view === MY_ASSETS ? myShares : allOrders} view={view} />
    </div>
  );
}
