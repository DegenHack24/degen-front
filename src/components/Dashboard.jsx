import { useMetaMaskContext } from "../utils/contexts/metamaskContext";
import { useEffect, useState } from "react";
import axios from "axios";
import DepositModal from "./DepositModal";
import { classNames } from "../utils/helpers/classNames";
import { timestampToDate } from "../utils/helpers/timestampToDate";
import { convertBigNumber } from "../utils/helpers/convertBigNumber";
import { ethers } from "ethers";
import SpinnerLoader from "./SpinnerLoader";

export default function Dashboard() {
  const [orders, setOrders] = useState({});
  const [selectedOrder, setSelectedOrder] = useState({});
  const [open, setOpen] = useState(false);
  const [signer, setSigner] = useState();
  const { metaMaskAccount } = useMetaMaskContext();

  const handleOpenModal = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

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

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    provider.send("eth_requestAccounts", []).then(() => {
      const signer = provider.getSigner();
      setSigner(signer);
    });
  }, []);

  if (!orders.length)
    return (
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <SpinnerLoader />;
      </div>
    );
  return (
    <>
      <DepositModal
        open={open}
        setOpen={setOpen}
        orderQuantity={convertBigNumber(
          selectedOrder?.additionalInformation?.totalOrderAmount
        )}
        orderName={selectedOrder?.additionalInformation?.equityTokenName}
        transactionToken={
          selectedOrder?.additionalInformation?.equityTokenOwner
        }
        orderId={convertBigNumber(selectedOrder?.order_id)}
        signer={signer}
      />
      {!metaMaskAccount && (
        <div className="w-[400px] border border-primary border-2 font-semibold rounded-xl text-black mx-auto px-2 py-4 text-center bg-secondary mb-4 shadow-xl">
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
                .sort(
                  (a, b) =>
                    b.additionalInformation.timestamp -
                    a.additionalInformation.timestamp
                )
                .map((order, index) => (
                  <div key={order.order_id.hex} className="relative">
                    <li
                      key={order.order_id.hex}
                      className={classNames(
                        index % 2 === 0 ? "bg-slate-50" : "bg-secondary",
                        "flex justify-between items-center px-3 py-5 text-slate-900 "
                      )}
                    >
                      <div className="min-w-[17.5%]">
                        <p className="text-sm font-semibold leading-6">
                          {order.additionalInformation.equityTokenName}
                        </p>
                      </div>
                      <div className="min-w-[10%]">
                        {convertBigNumber(
                          order.additionalInformation.pricePerToken.hex
                        )}{" "}
                        PLN
                      </div>
                      <div className="min-w-[5%] ml-14 text-center">
                        {convertBigNumber(
                          order.additionalInformation.totalOrderAmount.hex
                        )}
                      </div>
                      <div className="min-w-[10%] ml-12 text-center">
                        {timestampToDate(order.additionalInformation.timestamp)}
                      </div>

                      <div className="ml-10 text-white">
                        <button
                          onClick={() => handleOpenModal(order)}
                          className={classNames(
                            metaMaskAccount
                              ? "bg-accent"
                              : "bg-slate-200 hover:border-none hover:outline-none pointer-events-none"
                          )}
                          disabled={!metaMaskAccount}
                        >
                          Fulfill
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
