import { useEffect, useState } from "react";
import axios from "axios";
// import { dashboardMocks } from "../utils/constants/dashboard-mocks";
import Modal from "./Modal";

export default function Dashboard() {
  const [directory, setDirectory] = useState({});
  const [open, setOpen] = useState(false);
  console.log(directory);
  useEffect(() => {
    const fetchData = async () => {
      console.log("dupa");
      try {
        const response = await axios.post(
          "http://localhost:8080/v1/getAllOffers",
          {
            page_envelope: {
              page: 1,
              items_on_page: 20,
            },
          },
          {
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              "X-Auth-Token": "xd",
            },
          }
        );
        setDirectory(response.data.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      <button onClick={() => setOpen(true)}>OPEN MODAL</button>
      <div className="w-[900px] mx-auto mt-10 p-10 border-2 rounded-xl border-accent shadow-lg bg-secondary">
        <div className="flex justify-between text-accent text-xl p-4 pt-0 font-bold">
          <h3 className="min-w-36">Name</h3>
          <h3>Price</h3>
          <h3>Quantity</h3>
          <h3>Total</h3>
          <h3>Date</h3>
        </div>
        <nav className="h-[600px] overflow-y-auto" aria-label="Directory">
          {/* {Object.keys(directory).length > 0 &&
            Object.keys(directory).map((letter) => (
              <div key={letter} className="relative">
                {console.log(letter, "letter")}
                <div className="sticky top-0 z-10 border-y border-b-slate-200 border-t-slate-100 bg-slate-50 px-3 py-1.5 text-sm font-semibold leading-6 text-slate-900">
                  <h3>{letter}</h3>
                </div> */}
          <ul role="list" className="divide-y divide-slate-100">
            {directory > 0 &&
              Object.keys(directory).map((order) => (
                <li
                  key={order.order_id.hex}
                  className="flex justify-between px-3 py-5 text-slate-900"
                >
                  <div className="min-w-36">
                    <p className="text-sm font-semibold leading-6">
                      {order.additionalInformation.equityTokenAmount.type}
                      Name
                    </p>
                  </div>
                  <div>{order.additionalInformation.pricePerToken.hex}</div>
                  <div>{order.additionalInformation.equityTokenAmount.hex}</div>
                  <div>{order.additionalInformation.totalOrderAmount.hex}</div>
                  <div>{order.additionalInformation.currentState}</div>
                </li>
              ))}
          </ul>
          {/* </div>
            ))} */}
        </nav>
      </div>
    </>
  );
}
