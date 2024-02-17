// import { useEffect, useState } from "react";
// import axios from "axios";
import { dashboardMocks } from "../utils/constants/dashboard-mocks";
import Modal from "./Modal";

export default function Dashboard() {
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
      <Modal />
      <div className="w-[900px] mx-auto mt-10 p-10 border-2 rounded-xl border-accent shadow-lg bg-secondary">
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
