const BottomLayer = () => {
    return (
        <div className="flex flex-col gap-3 justify-center items-center">
            <div className="flex justify-center items-center gap-4">
                <img src="images/icon-check.svg" alt="check-icon" />
                <p className=" text-GrayishBlue-700 font-normal text-sm text-center first-letter:capitalize">
                    unlimited websites 
                </p>
            </div>
            <div className="flex justify-center items-center gap-4">
                <img src="images/icon-check.svg" alt="check-icon" />
                <p className=" text-GrayishBlue-700 font-normal text-sm text-center">
                    100% data ownership
                </p>
            </div>
            <div className="flex justify-center items-center gap-4">
                <img src="images/icon-check.svg" alt="check-icon" />
                <p className=" text-GrayishBlue-700 font-normal text-sm text-center first-letter:capitalize">
                    email reports
                </p>
            </div>
            <button className="first-letter:capitalize text-GrayishBlue-200 text-center text-sm font-normal bg-GrayishBlue-900 rounded-full w-fit mt-5 px-12 py-3 hover:cursor-pointer">
                start my trial
            </button>
        </div>
    );
}
 
export default BottomLayer;