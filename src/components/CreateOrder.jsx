import axios from "axios";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import InputNumber from "./Form/InputNumber";
import SelectBuyOrder from "./Form/SelectBuyOrder";
import ABI from "../contracts/TOK.sol/TOK.json";
import CreateOrderModal from "./Form/CreateOrderModal";
import { useMetaMaskContext } from "../utils/contexts/metamaskContext";
import { classNames } from "../utils/helpers/classNames";

const MOCKED_TRANSACTION_TOKEN = "0xBD18BB8E9fd6fD50fb7304DC1D2191f910382a34";

export default function CreateOrder() {
  const [tokens, setTokens] = useState({});
  const [selectedAddress, setSelectedAddress] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [signer, setSigner] = useState();
  const [loadingState, setLoadingState] = useState("idle");
  const [createOrderModalOpen, setCreateOrderModalOpen] = useState(false);
  const { metaMaskAccount } = useMetaMaskContext();

  console.log("createOrderModalOpen:", createOrderModalOpen);
  console.log("loadingState:", loadingState);
  //   console.log("selectedQuantity:", selectedQuantity);
  //   console.log("selectedPrice:", selectedPrice);
  //   console.log("selectedAddress:", selectedAddress);
  //   console.log("tokens:", tokens);

  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  useEffect(() => {
    provider.send("eth_requestAccounts", []).then(() => {
      const signer = provider.getSigner();
      setSigner(signer);
    });
  }, []);

  const onSubmit = async () => {
    setLoadingState("waiting-for-metamask");
    setCreateOrderModalOpen(true);

    const contract = new ethers.Contract(
      MOCKED_TRANSACTION_TOKEN,
      ABI.abi,
      signer
    );

    const createOrderRes = await contract.createOrder(
      selectedPrice,
      selectedAddress,
      selectedQuantity,
      { gasLimit: 300000 }
    );

    if (createOrderRes) setLoadingState("first-response");
    console.log("createOrderRes:", createOrderRes);

    const finalRes = await createOrderRes.wait();
    if (finalRes) setLoadingState("success");
  };

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/v1/getTokens",
          {},
          {
            headers: {
              "Content-Type": "application/json;charset=utf-8",
              "X-Auth-Token": "xd",
            },
          }
        );
        setTokens(response.data);
      } catch (error) {
        console.error("Error fetching tokens:", error);
      }
    };

    fetchTokens();
  }, []);

  return (
    <>
      {createOrderModalOpen && (
        <CreateOrderModal
          show={createOrderModalOpen}
          setOpen={setCreateOrderModalOpen}
          loadingState={loadingState}
        />
      )}

      <div className="w-[900px] mt-[10%] flex flex-col justify-center mx-auto text-black">
        <h1 className="w-full text-center text-3xl mb-4">Create new order</h1>
        <div className="text-center">
          <SelectBuyOrder
            tokens={tokens}
            setSelectedAddress={setSelectedAddress}
          />
          <InputNumber setData={setSelectedPrice} name="price" />
          <InputNumber setData={setSelectedQuantity} name="quantity" />
          <button
            type="submit"
            onClick={() => onSubmit()}
            className={classNames(
              metaMaskAccount
                ? "bg-accent"
                : "bg-slate-200 hover:border-none hover:outline-none pointer-events-none",
              "mt-8 text-white"
            )}
            disabled={!metaMaskAccount}
          >
            Create order
          </button>
        </div>
      </div>
    </>
  );
}
