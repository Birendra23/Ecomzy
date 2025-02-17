import { useSelector } from "react-redux";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import CartItem from "../components/Cartitem";
const Cart = () => {

  const {cart} = useSelector((state)=>state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(
    ()=>{
      setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0));
    },[cart]
  )
  return (
    <div>
      {cart.length > 0 ? (
        <div className="md:flex justify-center gap-2">
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item._id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col justify-between m-6">
            <div>
              <div className="uppercase text-green-900 font-bold ">
                Your Cart
              </div>
              <div className="uppercase text-green-800 text-5xl font-extrabold">
                Summary
              </div>
              <p>
                <span className="text-black font-bold">
                  Total Items:{cart.length}
                </span>
              </p>
            </div>
            <div className=" flex flex-col gap-2">
              <p>Total Amont:${totalAmount}</p>
              <button className="bg-green-700 rounded-full text-white font-bold w-[300px] h-[50px]">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-5 gap-y-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center mt-10">
            🛒 Your cart is empty. Start shopping now!
          </h1>

          <Link to={"/"}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart; // Ensure this is present
