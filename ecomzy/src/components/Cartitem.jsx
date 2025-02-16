import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {remove} from "../redux/slice/CartSlice";
import {toast} from "react-hot-toast";
const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();
  const removeFromCart = () =>{
      dispatch(remove(item.id));
      toast.error("Item Remeoved");
  }
  return (
    <div >
      <div className="flex justify-between">
        <div className="w-[180px]">
          <img src={item.image} className="w-full h-full p-2" />
        </div>
        <div className="flex flex-col p-2 gap-y-7 justify-center w-[280px] h-full">
          <h1 className="text-gray-700 font-semibold">{item.title}</h1>
          <h1>{item.description.split(" ").slice(0, 15).join(" ") + "..."}</h1>
          <div className="flex justify-between items-center ml-2 mr-2">
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div onClick={removeFromCart}>
              <MdDelete className="rounded-full w-5 h-5 bg-red-300 p-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full h-0 outline"></div>
    </div>
  );
};

export default CartItem;
