function Checkout() {
  return (
    <div>
      <div class="mt-10 mx-20 grid gap-14 md:grid-cols-1 items-start">
        <h1 className="capitalize font-semibold text-xl">
          {" "}
          One step only before your order proceed
        </h1>
        <div class="container shadow-lg rounded-xl px-8 pt-3 bg-gray-200">
          {/* shipping adress section */}
          <h1 class="text-xl font-bold py-4">Shipping Address : </h1>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Street"
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="City"
            />
          </div>
          <div class="form-group mb-12">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="State/Province"
            />
          </div>
        </div>
        {/* Credit Card section */}
        <div class="container shadow-lg rounded-lg px-8 pt-3 bg-gray-200">
          <h1 class="text-xl font-bold py-2">Credit Card : </h1>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Visa"
            />
          </div>
          <div class="form-group mb-6">
            <input
              type="text"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="exampleInput7"
              placeholder="Name on Card"
            />
          </div>
          <div className="flex flex-row">
            <div class="form-group mb-6">
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Card Number"
              />
            </div>
            <div class="form-group mb-6 px-4">
              <input
                type="text"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="CVV"
              />
            </div>
          </div>
          <div className="flex flex-row justify-start">
            <p className="font-semibold py-1"> Expiration Date : </p>
            <div class="form-group mb-6 px-4">
              <input
                type="month"
                // min="1"
                // max="12"
                // step="1"
                class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleInput7"
                placeholder="Month"
              />
            </div>
          </div>
        </div>
        {/* Review Order section */}
        <div class="container shadow-lg rounded-lg px-8 pt-3 mb-6 bg-gray-200 w-[600px]">
          <h1 class="text-xl font-bold py-4">Review Order : </h1>
          <div className="flex flex-row pb-4">
            <p className="">Total Qty : </p>
            <p className="font-bold px-40"> 2 pc </p>
          </div>
          <div className="flex flex-row pb-4">
            <p className="">Shipping Fee : </p>
            <p className="font-bold px-20"> Rp 50.000 </p>
          </div>
          <div className="flex flex-row pb-4">
            <p className="mb-6">Total Price : </p>
            <p className="font-bold px-20"> Rp 1.050.000 </p>
            <div class="pb-1">
              <div>
                <button
                  type="button"
                  class=" px-6 pt-3 pb-2 bg-blue-600 text-white font-semibold text-xs leading-normal uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 pb-1.5 mr-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
