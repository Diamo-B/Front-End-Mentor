import TopLayer from "./Card_Components/TopLayer";
import BottomLayer from "./Card_Components/BottomLayer";

const Card = () => {
    return ( 
        <div 
            className="rounded-xl bg-White w-11/12 mx-auto py-10 mb-20"
        >
            <TopLayer />
            <div className=" border-t-2 border-t-GrayishBlue-200 mt-12 mb-8">
            {/* Horizontal line */}          
            </div>
            <BottomLayer/>
        </div>
    );
}
 
export default Card;