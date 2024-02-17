// import { useEffect, useState } from "react";
// import axios from "axios";
import { useState } from "react";
import { useMetaMaskContext } from "../utils/contexts/metamaskContext";
import { dashboardMocks } from "../utils/constants/dashboard-mocks";
import Modal from "./Modal";

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const { metaMaskAccount } = useMetaMaskContext();
  // const [directory, setDirectory] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("YOUR_API_ENDPOINT");
  //       setDirectory(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      <button onClick={() => setOpen(true)}>OPEN MODAL</button>
      {!metaMaskAccount && (
        <div className="w-[900px] border border-primary border-2 font-semibold rounded-xl text-black mx-auto px-2 py-4 text-center bg-secondary mb-4">
          <h2>To buy shares you need to be logged in</h2>
        </div>
      )}
      <h1 className="w-full text-center text-3xl">Active Buy Orders</h1>
      <div className="w-[900px] mx-auto mt-2 p-10 border-2 rounded-xl border-accent shadow-lg bg-secondary">
        <div className="flex justify-between text-accent text-xl p-4 pt-0 font-bold">
          <h3 className="min-w-36">Name</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
        </div>
        <nav className="h-[600px] overflow-y-auto" aria-label="Directory">
          {Object.keys(dashboardMocks).map((letter) => (
            <div key={letter} className="relative">
              <div className="sticky top-0 z-10 border-y border-b-slate-200 border-t-slate-100 bg-slate-50 px-3 py-1.5 text-sm font-semibold leading-6 text-slate-900">
                <h3>{letter}</h3>
              </div>
              <ul role="list" className="divide-y divide-slate-100">
                {dashboardMocks[letter].map((person) => (
                  <li
                    key={person.email}
                    className="flex justify-between px-3 py-5  text-slate-900"
                  >
                    <div className="min-w-36">
                      <p className="text-sm font-semibold leading-6">
                        {person.name}
                      </p>
                    </div>
                    <div>21,370</div>
                    <div>0,2137</div>
                    <div>2,1370</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
