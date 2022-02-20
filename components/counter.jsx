import Script from "next/script"

function counter(){
    return(
    <div class="custom-number-input h-8 w-32">
        <div class="flex flex-row h-8 w-full rounded-lg relative bg-transparent mt-1">
            <button data-action="decrement" class=" bg-red-500 text-black hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
                <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <input type="number" class="outline-none focus:outline-none text-center w-full bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none" name="custom-input-number" value="0"></input>
            <button data-action="increment" class="bg-green-500 text-black hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
                <span class="m-auto text-2xl font-thin">+</span>
            </button>
        </div>
    </div>

    )
}

export default counter

