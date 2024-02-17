import { useMetaMaskContext } from "../utils/contexts/metamaskContext";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal";
import { classNames } from "../utils/helpers/classNames";
import { BigNumber } from "ethers";
import { timestampToDate } from "../utils/helpers/timestampToDate";

export default function Dashboard() {
  const [orders, setOrders] = useState({});
  const [open, setOpen] = useState(false);
  const { metaMaskAccount } = useMetaMaskContext();

  useEffect(() => {
    const fetchOrders = async () => {
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
        setOrders(response.data.body);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      {!metaMaskAccount && (
        <div className="w-[900px] border border-primary border-2 font-semibold rounded-xl text-black mx-auto px-2 py-4 text-center bg-secondary mb-4">
          <h2>To buy shares you need to be logged in</h2>
        </div>
      )}
      <h1 className="w-full text-center text-3xl">Active Buy Orders</h1>
      <div className="w-[900px] mx-auto mt-2 py-3 px-4 border-2 rounded-xl border-accent shadow-lg bg-secondary">
        <div className="w-full flex justify-between text-accent text-xl p-4 pt-0 font-bold">
          <h3>Name</h3>
          <h3>Unit price</h3>
          <h3>Total</h3>
          <h3>Date</h3>
          <h3 className="w-[90px]"></h3>
        </div>
        <div className="max-h-[600px] overflow-y-auto" aria-label="Directory">
          <ul
            role="list"
            className="flex flex-col divide-y divide-slate-100 border"
          >
            {orders.length > 0 &&
              orders
                .filter((order) => order.status === "NEW")
                .map((order, index) => (
                  <div key={order.order_id.hex} className="relative">
                    {console.log(order, "order")}
                    <li
                      key={order.order_id.hex}
                      className={classNames(
                        index % 2 === 0 ? "bg-slate-50" : "bg-secondary",
                        "flex justify-between px-3 py-5 text-slate-900 "
                      )}
                    >
                      <div className="min-w-[15%]">
                        <p className="text-sm font-semibold leading-6">
                          {order.additionalInformation.equityTokenName}
                        </p>
                      </div>
                      <div className="min-w-[10%]">
                        {BigNumber.from(
                          order.additionalInformation.pricePerToken.hex
                        ).toString()}
                      </div>
                      <div className="min-w-[10%] text-center">
                        {BigNumber.from(
                          order.additionalInformation.totalOrderAmount.hex
                        ).toString()}
                      </div>
                      <div className="min-w-[10%] text-center">
                        {timestampToDate(order.additionalInformation.timestamp)}
                      </div>

                      <div className="ml-10 text-white">
                        <button
                          onClick={() => setOpen(true)}
                          className="bg-accent"
                        >
                          Fulfil order
                        </button>
                      </div>
                    </li>
                  </div>
                ))}
          </ul>
        </div>
      </div>
    </>
  );
}
