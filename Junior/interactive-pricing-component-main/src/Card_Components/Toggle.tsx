const Toggle = () => {
    return ( 
        <label className="flex items-center">
            <input type="checkbox" className="peer appearance-none"/>
            <span 
                className=" w-12 h-6 px-1 bg-GrayishBlue-200 rounded-full flex flex-shrink-0 items-center after:w-4 after:h-4 after:bg-White after:rounded-full peer-checked:bg-Cyan-500 peer-checked:after:translate-x-6 ease-in-out duration-300 after:duration-300 hover:cursor-pointer"
            ></span>
        </label>
    );
}
 
export default Toggle;