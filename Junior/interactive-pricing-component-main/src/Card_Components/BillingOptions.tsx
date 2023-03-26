import Toggle from './Toggle';

const BillingOptions = () => {
    return ( 
        <div className="flex justify-center gap-4 ml-4 items-center text-GrayishBlue-700 capitalize font-normal text-sm">
        <p>monthly billing</p>
        <Toggle />
        <div className="flex items-center justify-between gap-1">
          <p>yearly billing</p>
          <p className="inline text-Red-100 bg-GrayishRed-100 font-bold text-xs px-2 py-1 rounded-full">-25%</p>
        </div>
      </div>
    );
}
 
export default BillingOptions;