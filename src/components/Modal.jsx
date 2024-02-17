import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import RangePicker from "./Form/RangePicker";

const MY_SHARES_NUMBER_MOCK = 15;

export default function Modal({ open, setOpen }) {
  const [sharesToSell, setSharesToSell] = useState(0);

  return (
    <Transition.Root show={open} as={Fragment}>
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
              <Dialog.Panel className="relative min-w-[40%] text-black transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="flex flex-col justify-center text-center">
                    <h2 className="text-2xl mb-6">You are selling: ORLEN</h2>
                    <p className="text-xl mb-4">
                      Choose how many shares you want to sell
                    </p>
                    <RangePicker
                      value={sharesToSell}
                      type={"range"}
                      onChange={(e) => setSharesToSell(e.target.value)}
                      max={MY_SHARES_NUMBER_MOCK}
                    />
                    <label>Selected: {sharesToSell}</label>
                  </div>
                </div>
                <div className="flex gap-4 mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-accent px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                    onClick={() => console.log("Confirmed")}
                  >
                    Confirm
                  </button>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                  >
                    onClick={() => setOpen(false)}
                    Cancel
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
