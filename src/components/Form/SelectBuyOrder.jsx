import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { classNames } from "../../utils/helpers/classNames";

export default function SelectBuyOrder({ tokens, setSelectedAddress }) {
  const [selectedISIN, setSelectedISIN] = useState("Choose company");

  const handleSelectionChange = (selectedISIN) => {
    const token = tokens.find((token) => token.isin === selectedISIN);
    setSelectedISIN(selectedISIN);
    if (token) setSelectedAddress(token.address);
    else setSelectedAddress("");
  };

  return (
    <Listbox value={selectedISIN} onChange={handleSelectionChange}>
      {({ open }) => (
        <div className="relative mt-2">
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900 mb-2"
          >
            Company
          </label>
          <Listbox.Button className="relative w-1/3 cursor-default rounded-md bg-white py-1.5 pl-[28px] pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <span className="block truncate">{selectedISIN}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute left-1/2 translate-x-[-50%] z-10 mt-1 max-h-60 w-1/3 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {tokens.length > 0 &&
                tokens.map((token) => (
                  <Listbox.Option
                    key={token.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-indigo-600 text-black" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-8 pr-4"
                      )
                    }
                    value={token.isin}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {token.isin}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 left-0 flex items-center pl-1.5"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
