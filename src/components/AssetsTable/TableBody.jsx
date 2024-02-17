import { MY_ASSETS } from "../../utils/constants/globals";
import { classNames } from "../../utils/helpers/classNames";

const TABLE_HEADINGS = ["Name", "Amount", ""];

export default function TableBody({ data, view }) {
  console.log("data:", data);
  return (
    <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
      <div className="mt-8 flow-root">
        <div className="inline-block min-w-full py-2 align-middle">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                {TABLE_HEADINGS.map((heading, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="sticky top-0 z-10 border-b border-slate-200 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8 text-black"
                  >
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((element, index) => (
                <tr key={element.name + index}>
                  <td
                    className={classNames(
                      index !== element.length - 1
                        ? "border-b border-slate-200"
                        : "",
                      "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6 lg:pl-8"
                    )}
                  >
                    {element.name}
                  </td>
                  <td
                    className={classNames(
                      index !== element.length - 1
                        ? "border-b border-slate-200"
                        : "",
                      "whitespace-nowrap hidden px-3 py-4 text-sm text-slate-500 sm:table-cell text-black"
                    )}
                  >
                    {element.amount}
                  </td>

                  <td
                    className={classNames(
                      index !== element.length - 1
                        ? "border-b border-slate-200"
                        : "",
                      "relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8 text-black"
                    )}
                  >
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      {view === MY_ASSETS ? "Buy more" : "Buy"}
                      <span className="sr-only">, {element.name}</span>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
