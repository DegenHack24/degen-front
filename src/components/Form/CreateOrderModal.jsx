import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import SpinnerLoader from "../SpinnerLoader";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { shortenAddress } from "../../utils/helpers/shortenAddress";

export default function CreateOrderModal({
  show,
  setOpen,
  loadingState,
  transactionHash,
}) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={() => setOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative min-w-[60%] min-h-[300px] flex items-center text-black transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div className="w-full flex flex-col justify-center gap-8 p-4">
                  <div className="mx-auto">
                    {loadingState === "success" ? (
                      <CheckCircleIcon width={100} height={100} color="green" />
                    ) : (
                      <SpinnerLoader />
                    )}
                  </div>

                  <h1 className="w-full text-center text-3xl w-full">
                    {loadingState === "waiting-for-metamask" &&
                      "Please confirm transaction on your metamask wallet"}
                    {loadingState === "first-response" &&
                      "Please wait for the blockchain confirmation"}
                    {loadingState === "success" && (
                      <div>
                        <h2>Success!</h2>
                        <div className="flex justify-center items-center gap-4 whitespace-nowrap">
                          <p className="text-[22px] mt-2">Etherscan link: </p>

                          <a
                            className="mt-1"
                            href={`https://sepolia.etherscan.io/tx/${transactionHash}`}
                          >
                            <span>{shortenAddress(transactionHash)}</span>
                          </a>
                        </div>
                      </div>
                    )}
                  </h1>

                  <button
                    type="button"
                    className="inline-flex w-1/2 mx-auto justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                    onClick={() => setOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
