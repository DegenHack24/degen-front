export default function InputNumber({ setData, name }) {
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {name === "price" ? "Price" : "Quantity"}
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="number"
          name={name}
          id={name}
          className="block w-1/3 mx-auto rounded-md border-0 py-1.5 pl-7 pr-12 text-black ring-1 ring-inset ring-gray-300 placeholder:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
          placeholder={
            name === "price" ? "Set your share price" : "Number of shares"
          }
          aria-describedby="price-currency"
          onChange={(e) => setData(e.target.value)}
        />
        <div className="pointer-events-none absolute inset-y-0 right-[35%] flex items-center pr-3">
          <span className="text-gray-500 sm:text-sm" id="price-currency">
            {name === "price" ? "PLN" : ""}
          </span>
        </div>
      </div>
    </div>
  );
}
