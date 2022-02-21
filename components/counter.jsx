function counter(){
    return(
        <div class="ml-[-7px] flex justify-center">
        <div class="xl:w-75">
          <button
            class="mt-[-5px] text-black text-center text-sm font-semibold bg-red-700 rounded-xl px-2  focus:outline-none border border-gray-800 focus:border-gray-600
            hover:bg-white hover:text-[#FA1D58] hover:drop-shadow-md focus:ring-1 focus:ring-pink-500">
            -
          </button>
          <button
            class="mt-[-5px] ml-[55px] text-black text-center text-sm font-semibold bg-green-700 rounded-xl px-1.5  focus:outline-none border border-gray-800 focus:border-gray-600
            hover:bg-white hover:text-[#FA1D58] hover:drop-shadow-md focus:ring-1 focus:ring-pink-500">
            +
          </button>
          <input
            type="number"
            class="
              text-center 
              form-control
              block
              w-[45px]
              px-3
              py-0.1
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-black
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              ml-[29px]
              mt-[-24px]
            "
            id="totalquantity"
            placeholder="0"
          />
        </div>
      </div>
    )

}

export default counter;
